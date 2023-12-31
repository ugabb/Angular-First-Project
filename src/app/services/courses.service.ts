import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/models/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Course[]>(this.API);
    // .pipe
    // first()
    // delay(5000),
    // tap((courses) => console.log(courses))
    //();
  }
}
