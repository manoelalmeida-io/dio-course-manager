import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  private courses: Course[] = [];
  private filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
    this.filteredCourses = this.courses;
  }

  set filter(value: string) {
    this.filterBy = value;
    this.filteredCourses = this.courses.filter(
      (course: Course) => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(): string {
    return this.filterBy;
  }
}
