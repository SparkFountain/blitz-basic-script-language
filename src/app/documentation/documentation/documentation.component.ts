import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AceConfig } from 'ngx-ace-wrapper';
import { forkJoin } from 'rxjs';
import { SecondLevel } from 'src/app/enums/second-level.enum';
import { ThirdLevel } from 'src/app/enums/third-level.enum';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb.interface';
import { DocItem } from 'src/app/interfaces/doc-item.interface';
import { Topic } from 'src/app/interfaces/topic.interface';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  breadcrumbs!: Breadcrumb[];
  topics!: Topic[];
  tabLabels!: string[];

  code!: string;

  docItem!: DocItem | null;

  // Quests
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  playing!: boolean;

  config!: AceConfig;

  constructor(
    private activatedRoute: ActivatedRoute,
    private translocoService: TranslocoService,
    private breadcrumbService: BreadcrumbService,
    private docsService: DocsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // get breadcrumbs
    this.breadcrumbs = [
      {
        label: 'Dokumentation',
        icon: 'library_books',
        path: '/documentation',
      },
      {
        label: 'Schlüsselwörter',
        icon: 'key',
        path: '/documentation/keywords',
      },
      {
        label: 'Schleifen',
        icon: 'all_inclusive',
        path: '/documentation/keywords/loops',
      },
    ];

    // get topics
    this.topics = [
      {
        label: 'For-Schleife',
        sections: [
          {
            label: 'For',
            path: '/documentation/keywords/loops/for',
          },
          {
            label: 'Next',
            path: '/documentation/keywords/loops/next',
          },
          {
            label: 'Step',
            path: '/documentation/keywords/loops/step',
          },
        ],
      },
      {
        label: 'While-Schleife',
        sections: [
          {
            label: 'While',
            path: '/documentation/keywords/loops/while',
          },
          {
            label: 'Wend',
            path: '/documentation/keywords/loops/wend',
          },
        ],
      },
      {
        label: 'Repeat-Schleife',
        sections: [
          {
            label: 'Repeat',
            path: '/documentation/keywords/loops/repeat',
          },
          {
            label: 'Until',
            path: '/documentation/keywords/loops/until',
          },
          {
            label: 'Forever',
            path: '/documentation/keywords/loops/forever',
          },
        ],
      },
    ];

    // define tab labels (static)
    this.tabLabels = [
      this.translocoService.translate('tutorials.interactive'),
      this.translocoService.translate('tutorials.video'),
      this.translocoService.translate('tutorials.missions'),
    ];

    // example source code
    this.code = '; to do\nhere should go some content later...';

    // get second and third level if exists in URL
    const url: UrlSegment[] = this.activatedRoute.snapshot.url;
    if (url.length === 1) {
      this.breadcrumbService.setSecondLevel(url[0].path);
    }
    console.log('>>> current URL', url);

    // temporarily set docItem to null
    this.docItem = null;

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });

    this.playing = false;

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

  play(): void {
    this.playing = true;
  }

  stop(): void {
    this.playing = false;
  }
}
