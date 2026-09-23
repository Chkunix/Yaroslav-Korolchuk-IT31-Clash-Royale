import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { CourseDetail } from './pages/course-detail/course-detail';
import { AddCourse } from './pages/add-course/add-course';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: Courses },
  { path: 'courses/add', component: AddCourse },
  { path: 'course/:id', component: CourseDetail }
];