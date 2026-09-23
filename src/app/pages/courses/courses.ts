import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courses.html'
})
export class Courses {
  constructor(private courseService: CourseService) {}

  get courses() {
    return this.courseService.getItems();
  }
}