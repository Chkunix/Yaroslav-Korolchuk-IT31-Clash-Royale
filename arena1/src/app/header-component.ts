import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>{{ siteTitle }}</h1>
    </header>
  `,
  styles: [`
    .header { padding: 1rem; background: #222; color: #fff; text-align: center; }
  `]
})
export class HeaderComponent {
  @Input() siteTitle: string = 'Default Title';
}