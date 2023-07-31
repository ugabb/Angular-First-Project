import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../models/course';
<<<<<<< HEAD
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
=======
import { CoursesService } from './../services/courses.service';
>>>>>>> 472c2c402e8e72bd815a3a320bbc9bdf956fbdac

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
<<<<<<< HEAD
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
=======
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // courseServices: CoursesService;

  constructor(
    private courseServices: CoursesService,
    public dialog: MatDialog
  ) {
    // this.courseServices = new CoursesService();
    // this.courses = []; é possivel tambem inicializar desta maneira
    this.courses$ = this.courseServices.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos!')
        return of([]);
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
>>>>>>> 472c2c402e8e72bd815a3a320bbc9bdf956fbdac
}
