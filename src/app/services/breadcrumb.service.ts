import { Injectable } from '@angular/core';
import { Breadcrumb } from '../interfaces/breadcrumb.interface';

const defaultBreadcrumbs = [{}];

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbs!: Breadcrumb[];

  constructor() {
    this.breadcrumbs = [
      {
        label: 'documentation.title',
        icon: 'library_books',
        path: '/documentation',
      },
    ];
  }

  getBreadcrumbs(): Breadcrumb[] {
    return this.breadcrumbs;
  }
}
