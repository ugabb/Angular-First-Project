import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../models/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
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
}
