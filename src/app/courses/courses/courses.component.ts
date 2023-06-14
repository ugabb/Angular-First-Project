import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [{_id:'1', name: 'Angular + Spring', category:'front-end'}];
  displayedColumns = ['name', 'category'];

  constructor(){
    // this.courses = []; é possivel tambem inicializar desta maneira
  }

}
