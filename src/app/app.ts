import { Component } from '@angular/core';
import { Booklist } from './components/booklist/booklist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Booklist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-library';
}