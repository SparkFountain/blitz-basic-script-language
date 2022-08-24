import { Component, OnInit } from '@angular/core';
import { DocItem } from 'src/app/interfaces/doc-item.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  docItem!: DocItem | null;

  constructor() {}

  ngOnInit(): void {
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
