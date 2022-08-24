import { Injectable } from '@angular/core';
import { SecondLevel } from '../enums/second-level.enum';
import { ThirdLevel } from '../enums/third-level.enum';
import { Breadcrumb } from '../interfaces/breadcrumb.interface';

const defaultBreadcrumbs = [{}];

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbs!: Breadcrumb[];
  secondLevel!: SecondLevel | null;
  thirdLevel!: ThirdLevel | null;

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

  setSecondLevel(plain: string): void {
    switch (plain.toLowerCase()) {
      case 'keywords':
        // this.breadcrumbs = SecondLevel.KEYWORDS;
    }
  }
}
