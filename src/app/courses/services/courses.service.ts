import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first,delay } from 'rxjs/operators';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) {}
  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
