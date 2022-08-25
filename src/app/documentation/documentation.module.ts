import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AceModule, ACE_CONFIG } from 'ngx-ace-wrapper';
import { DEFAULT_ACE_CONFIG } from '../app.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { SideNavModule } from '../shared/side-nav/side-nav.module';
import { ContentTabberModule } from '../shared/content-tabber/content-tabber.module';

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    TranslocoModule,
    MatSidenavModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    AceModule,
    SideNavModule,
    ContentTabberModule,
  ],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class DocumentationModule {}
