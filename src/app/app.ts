import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../services/course/course';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.html'
})
export class AddCourse {
  title = '';
  teacher = '';
  description = '';
  submitted = false;

  constructor(private courseService: CourseService) {}

  addItem(form: NgForm) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    this.courseService.addItem({
      title: this.title,
      teacher: this.teacher,
      description: this.description
    });
    form.resetForm();
    this.submitted = false;
  }
}