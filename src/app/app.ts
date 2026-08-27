import { Component } from '@angular/core';
import { MovieCatalogComponent } from './movie-catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieCatalogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-app';
}