import { Component } from '@angular/core';
import { HeaderComponent } from './header-component';
import { MoviesComponent } from './movies.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MoviesComponent, FooterComponent],
  templateUrl: './app.html'
})
export class AppComponent {}