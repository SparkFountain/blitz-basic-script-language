import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {}

  chooseLanguage(i18n: string): void {
    this.translocoService.setActiveLang(i18n);
  }
}
