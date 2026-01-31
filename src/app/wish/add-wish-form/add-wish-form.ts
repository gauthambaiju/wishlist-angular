import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css',
})
export class AddWishForm {
  @Input() newWishText: string = '';
  @Output() wishTextChange = new EventEmitter<string>();
  @Output() addWish = new EventEmitter<void>();

  onInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.wishTextChange.emit(value);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.addWish.emit();
  }
}
