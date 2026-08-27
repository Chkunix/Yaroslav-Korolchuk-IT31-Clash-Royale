import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  title: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-movie-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent {
  movies: Movie[] = [
    { title: 'Interstellar', year: 2014, rating: 9 },
    { title: 'Avatar', year: 2009, rating: 8 },
    { title: 'Titanic', year: 1997, rating: 7 }
  ];

  newTitle: string = '';
  newYear: number | null = null;
  newRating: number | null = null;

  addMovie(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.movies.push({
      title: this.newTitle.trim(),
      year: this.newYear as number,
      rating: this.newRating as number
    });

    this.resetForm();
  }

  removeMovie(index: number): void {
    this.movies.splice(index, 1);
  }

  resetForm(): void {
    this.newTitle = '';
    this.newYear = null;
    this.newRating = null;
  }

  isFormValid(): boolean {
    return (
      this.newTitle.trim().length > 0 &&
      this.newYear !== null &&
      this.newYear > 0 &&
      this.newRating !== null &&
      this.newRating >= 1 &&
      this.newRating <= 10
    );
  }

  getRatingClass(rating: number): string {
    if (rating >= 8) {
      return 'rating-high';
    } else if (rating >= 5) {
      return 'rating-medium';
    } else {
      return 'rating-low';
    }
  }
}