import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-filter.html',
  styleUrl: './wish-filter.css',
})
export class WishFilter {
  @Input() listFilter: '0' | '1' | '2' = '0';
  @Output() filterChanged = new EventEmitter<'0' | '1' | '2'>();

  onChange(e: Event) {
    const value = (e.target as HTMLSelectElement).value as '0' | '1' | '2';
    this.filterChanged.emit(value);
  }
}
