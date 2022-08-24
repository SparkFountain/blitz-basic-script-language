import { Component, Input, OnInit } from '@angular/core';
import { DocItem } from 'src/app/interfaces/doc-item.interface';

@Component({
  selector: 'app-documentation-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() docItem!: DocItem;

  constructor() { }

  ngOnInit(): void {
  }

}
