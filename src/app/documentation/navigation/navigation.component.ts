import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SecondLevel } from 'src/app/enums/second-level.enum';
import { ThirdLevel } from 'src/app/enums/third-level.enum';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb.interface';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-documentation-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  breadcrumbs!: Breadcrumb[];

  searchControl!: FormControl;
  searchAutoFillOptions!: string[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // Breadcrumbs
    this.breadcrumbs = this.breadcrumbService.getBreadcrumbs();

    this.searchControl = new FormControl();
    this.searchAutoFillOptions = [
      'For',
      'Forever',
      'Next',
      'Repeat',
      'Step',
      'To',
      'Until',
      'Wend',
      'While',
    ];
  }

  updateSearchAutoFill(): void {
    const searchTerm = this.searchControl.value.toLowerCase().trim();
    this.searchAutoFillOptions = this.searchService.getSuggestions(
      searchTerm,
      SecondLevel.KEYWORDS,
      ThirdLevel.LOOPS
    );
  }
}
