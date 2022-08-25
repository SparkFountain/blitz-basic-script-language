import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'basics',
    component: LessonComponent,
  },
  {
    path: 'graphics',
    component: LessonComponent,
  },
  {
    path: 'io',
    component: LessonComponent,
  },
  {
    path: 'sound',
    component: LessonComponent,
  },
  {
    path: 'gui',
    component: LessonComponent,
  },
  {
    path: 'cloud',
    component: LessonComponent,
  },
  {
    path: 'particles',
    component: LessonComponent,
  },
  {
    path: 'meshes',
    component: LessonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialsRoutingModule {}
