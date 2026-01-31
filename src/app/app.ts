import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, Contact],
})
export class App {}
