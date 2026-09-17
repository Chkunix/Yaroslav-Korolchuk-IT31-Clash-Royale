import { Component } from '@angular/core';
import { AddCourseComponent } from './add-course/add-course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddCourseComponent],
  templateUrl: './app.html'
})
export class App {
}