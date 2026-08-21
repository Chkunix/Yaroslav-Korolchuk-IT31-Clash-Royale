import { Component } from '@angular/core';
import { MovieCardComponent } from './movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

  movieAdded() {
    alert('Фільм додано в обране');
  }
}