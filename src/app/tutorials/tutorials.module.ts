import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LessonComponent } from './lesson/lesson.component';
import { SideNavModule } from '../shared/side-nav/side-nav.module';
import { ContentTabberModule } from '../shared/content-tabber/content-tabber.module';

@NgModule({
  declarations: [OverviewComponent, LessonComponent],
  imports: [
    CommonModule,
    TutorialsRoutingModule,
    MatCardModule,
    TranslocoModule,
    MatButtonModule,
    MatIconModule,
    SideNavModule,
    ContentTabberModule,
  ],
})
export class TutorialsModule {}
