import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { KeywordsComponent } from './keywords/keywords.component';
import { CommandsComponent } from './commands/commands.component';
import { ConstantsAndScancodesComponent } from './constants-and-scancodes/constants-and-scancodes.component';
import { DifferencesToBlitzBasicComponent } from './differences-to-blitz-basic/differences-to-blitz-basic.component';
import { MigrationGuideComponent } from './migration-guide/migration-guide.component';
import { OverviewComponent } from './overview/overview.component';
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

@NgModule({
  declarations: [
    KeywordsComponent,
    CommandsComponent,
    ConstantsAndScancodesComponent,
    DifferencesToBlitzBasicComponent,
    MigrationGuideComponent,
    OverviewComponent,
    NavigationComponent,
    DescriptionComponent,
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
  ],
})
export class DocumentationModule {}
