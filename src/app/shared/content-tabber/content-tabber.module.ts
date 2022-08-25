import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTabberComponent } from './content-tabber.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AceModule, ACE_CONFIG } from 'ngx-ace-wrapper';
import { DEFAULT_ACE_CONFIG } from 'src/app/app.module';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ContentTabberComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    TranslocoModule,
    MatCardModule,
    MatIconModule,
    AceModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [ContentTabberComponent],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class ContentTabberModule {}
