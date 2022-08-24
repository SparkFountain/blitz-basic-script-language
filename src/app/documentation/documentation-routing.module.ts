import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
  },
  {
    path: 'keywords',
    component: DocumentationComponent,
  },
  {
    path: 'commands',
    component: DocumentationComponent,
  },
  {
    path: 'constants-and-scancodes',
    component: DocumentationComponent,
  },
  {
    path: 'differences-to-blitz-basic',
    component: DocumentationComponent,
  },
  {
    path: 'migration-guide',
    component: DocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
