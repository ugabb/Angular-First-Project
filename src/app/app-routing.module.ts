import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// se a rota for a padrao(/4200) a aplicação vai redirecionar diretamente para o component "courses";
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
