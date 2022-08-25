import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    RouterModule,
    MatIconModule,
    TranslocoModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [SideNavComponent],
})
export class SideNavModule {}
