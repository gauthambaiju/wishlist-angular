import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() item!: WishItem;
  @Output() toggled = new EventEmitter<void>();

  constructor(private events: EventService) {}

  onChange() {
    this.toggled.emit();
  }

  removeWish() {
    this.events.emit('removeWish', this.item.id);
  }
}
