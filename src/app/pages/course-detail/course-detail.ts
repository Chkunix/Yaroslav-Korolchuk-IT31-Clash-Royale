import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetailComponent implements OnInit {
  id!: number;
  course: any;

  courses = [
    { id: 1, title: 'HTML та CSS', teacher: 'Олександр', duration: 20 },
    { id: 2, title: 'JavaScript', teacher: 'Марія', duration: 30 },
    { id: 3, title: 'Angular', teacher: 'Іван', duration: 25 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.course = this.courses.find(c => c.id === this.id);
    });
  }
}