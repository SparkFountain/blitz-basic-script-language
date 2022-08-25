import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SecondLevel } from 'src/app/enums/second-level.enum';
import { ThirdLevel } from 'src/app/enums/third-level.enum';
import { DocItem } from 'src/app/interfaces/doc-item.interface';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  docItem!: DocItem | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private docsService: DocsService
  ) {}

  ngOnInit(): void {
    // get second and third level if exists in URL
    const url: UrlSegment[] = this.activatedRoute.snapshot.url;
    if (url.length === 1) {
      this.breadcrumbService.setSecondLevel(url[0].path);
    }
    console.log('>>> current URL', url);

    this.docItem = null;

    forkJoin({
      description: this.docsService.getDescription$(
        SecondLevel.KEYWORDS,
        ThirdLevel.LOOPS,
        'For'
      ),
      examples: this.docsService.getCodeExamples$(
        SecondLevel.KEYWORDS,
        ThirdLevel.LOOPS,
        'For'
      ),
    }).subscribe(({ description, examples }) => {
      this.docItem = {
        name: 'For',
        description,
        examples,
        quests: [],
      };
    });
  }
}
