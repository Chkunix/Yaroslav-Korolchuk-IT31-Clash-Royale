import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  templateUrl: './course-detail.html'
})
export class CourseDetail {
  id!: number;
  course: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.course = this.courseService.getItemById(this.id);
    });
  }
}