import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {
  @Input() title: string = '';
  @Input() rating: number = 0;

  @Output() favorite = new EventEmitter<void>();

  addToFavorite() {
    this.favorite.emit();
  }
}