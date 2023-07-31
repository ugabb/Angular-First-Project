import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  // courses: Course[] = [{_id:'1', name: 'Angular + Spring', category:'front-end'}];

  courses: Course[] = [];

  ngOnInit() {
    this.loadCourses();
  }

  constructor(
    private courseService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.courses = []; é possivel tambem inicializar desta maneira
  }

  loadCourses() {
    this.courseService.list().subscribe({
      next: (data) => {
        // The 'next' function is called here with the emitted data
        this.courses = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
      complete: () => {
        console.log('Observable completed successfully.');
      },
    });
  }

  displayedColumns = ['_id', 'name', 'category', 'actions'];

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
