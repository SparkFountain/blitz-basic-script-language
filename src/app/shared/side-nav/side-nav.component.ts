import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SecondLevel } from 'src/app/enums/second-level.enum';
import { ThirdLevel } from 'src/app/enums/third-level.enum';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb.interface';
import { Topic } from 'src/app/interfaces/topic.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() breadcrumbs!: Breadcrumb[];
  @Input() topics!: Topic[];

  searchControl!: FormControl;
  searchAutoFillOptions!: string[];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Breadcrumbs

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
