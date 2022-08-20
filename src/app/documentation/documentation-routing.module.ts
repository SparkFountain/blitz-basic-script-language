import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './commands/commands.component';
import { ConstantsAndScancodesComponent } from './constants-and-scancodes/constants-and-scancodes.component';
import { DifferencesToBlitzBasicComponent } from './differences-to-blitz-basic/differences-to-blitz-basic.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { MigrationGuideComponent } from './migration-guide/migration-guide.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'keywords',
    component: KeywordsComponent,
  },
  {
    path: 'commands',
    component: CommandsComponent,
  },
  {
    path: 'constants-and-scancodes',
    component: ConstantsAndScancodesComponent,
  },
  {
    path: 'differences-to-blitz-basic',
    component: DifferencesToBlitzBasicComponent,
  },
  {
    path: 'migration-guide',
    component: MigrationGuideComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
