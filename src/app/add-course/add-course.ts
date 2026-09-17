import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-course.html'
})
export class AddCourseComponent {
  newItem = {
    title: '',
    teacher: '',
    description: ''
  };

  submitted = false;

  courses: any[] = [];

  addItem(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.courses.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}