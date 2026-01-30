import { Component, computed, signal } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';
import { EventService } from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, WishList, AddWishForm, WishFilter],
})
export class App {
  items = signal<WishItem[]>([
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ]);

  constructor(private events: EventService) {
    this.events.listen('removeWish', (wishId: string) => {
      this.items.update((items) => items.filter((item) => item.id !== wishId));
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
