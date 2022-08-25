import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
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

    // TODO: should be null initially
    // this.docItem = null;

    this.docItem = {
      name: 'For',
      description:
        'Diese Anweisung definiert eine Zählschleife, die mit Next abgeschlossen werden muss. Der Variable wird ein Startwert zugewiesen. Nach einem kompletten Durchlauf der Schleife bis Next wird der Wert der Variable erhöht. Dieser Befehl kann nur zusammen mit To und Next benutzt werden (zusätzlich sind Each und Step möglich).',
      examples: [
        {
          title: 'Zählen bis zehn',
          code: 'For x = 1 To 10\nPrint x\nNext',
        },
      ],
      quests: [],
    };
  }
}
