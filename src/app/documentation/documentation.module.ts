import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DescriptionComponent } from './description/description.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AceModule, ACE_CONFIG } from 'ngx-ace-wrapper';
import { DEFAULT_ACE_CONFIG } from '../app.module';
import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  declarations: [
    NavigationComponent,
    DescriptionComponent,
    DocumentationComponent,
  ],
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
    AceModule,
  ],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class DocumentationModule {}
