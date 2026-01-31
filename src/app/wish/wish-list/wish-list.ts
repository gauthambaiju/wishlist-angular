import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListItem } from '../wish-list-item/wish-list-item';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, WishListItem],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  @Input() items: WishItem[] = [];
  @Output() toggle = new EventEmitter<WishItem>();

  toggleItem(item: WishItem) {
    this.toggle.emit(item);
  }
}
