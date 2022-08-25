import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb.interface';
import { Topic } from 'src/app/interfaces/topic.interface';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  tabLabels!: string[];
  breadcrumbs!: Breadcrumb[];
  topics!: Topic[];

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.tabLabels = [
      this.translocoService.translate('tutorials.interactive'),
      this.translocoService.translate('tutorials.video'),
      this.translocoService.translate('tutorials.missions'),
    ];

    this.breadcrumbs = [
      {
        label: 'Tutorials',
        icon: 'school',
        path: '/tutorials',
      },
      {
        label: 'Grundlagen',
        icon: 'bolt',
        path: '/tutorials/basics',
      },
      {
        label: 'Variablen',
        path: '/tutorials/basics',
      },
    ];

    this.topics = [
      {
        label: 'Globale Variablen',
        sections: [
          {
            label: 'Definition',
          },
          {
            label: 'Zugriff',
          },
        ],
      },
      {
        label: 'Lokale Variablen',
        sections: [
          {
            label: 'Definition',
          },
          {
            label: 'Gültigkeitsbereich',
          },
          {
            label: 'Zugriff',
          },
        ],
      },
    ];
  }
}
