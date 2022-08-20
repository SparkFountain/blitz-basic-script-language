import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { KeywordsComponent } from './keywords/keywords.component';
import { CommandsComponent } from './commands/commands.component';
import { ConstantsAndScancodesComponent } from './constants-and-scancodes/constants-and-scancodes.component';
import { DifferencesToBlitzBasicComponent } from './differences-to-blitz-basic/differences-to-blitz-basic.component';
import { MigrationGuideComponent } from './migration-guide/migration-guide.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    KeywordsComponent,
    CommandsComponent,
    ConstantsAndScancodesComponent,
    DifferencesToBlitzBasicComponent,
    MigrationGuideComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
