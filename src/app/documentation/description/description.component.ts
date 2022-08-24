import { Component, Input, OnInit } from '@angular/core';
import { DocItem } from 'src/app/interfaces/doc-item.interface';

// ACE editor specific modules
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';
import { AceConfig } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-documentation-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() docItem!: DocItem;

  config!: AceConfig;

  constructor() {}

  ngOnInit(): void {}
}
