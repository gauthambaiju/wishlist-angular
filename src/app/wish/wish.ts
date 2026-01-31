import { Component, computed, OnInit, signal } from '@angular/core';
import { WishFilter } from './wish-filter/wish-filter';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish-service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [WishFilter, WishList, AddWishForm],
  templateUrl: './wish.html',
  styleUrl: './wish.css',
})
export class Wish implements OnInit {
  items = signal<WishItem[]>([]);

  constructor(
    private events: EventService,
    private wishService: WishService,
  ) {
    this.events.listen('removeWish', (wishId: string) => {
      this.items.update((items) => items.filter((item) => item.id !== wishId));
    });
  }

  ngOnInit() {
    this.wishService.getWishes().subscribe({
      next: (data: any) => {
        const wishes = data.map((wish: any) => new WishItem(wish.wishText, wish.isComplete));
        this.items.set(wishes);
      },
      error: (error: any) => {
        alert(error.message);
      },
    });
  }
  newWishText = signal('');
  listFilter = signal<'0' | '1' | '2'>('0');

  filteredItems = computed(() => {
    const filter = this.listFilter();
    const items = this.items();

    switch (filter) {
      case '1':
        return items.filter((i) => !i.isComplete);
      case '2':
        return items.filter((i) => i.isComplete);
      default:
        return items;
    }
  });

  addNewWish() {
    this.items.update((items) => [...items, new WishItem(this.newWishText())]);
    this.newWishText.set('');
  }

  toggleItem(item: WishItem) {
    this.items.update((items) =>
      items.map((i) => (i === item ? { ...i, isComplete: !i.isComplete } : i)),
    );
  }

  filterChanged(value: '0' | '1' | '2') {
    this.listFilter.set(value);
  }
}
