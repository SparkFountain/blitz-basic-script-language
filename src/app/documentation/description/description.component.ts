import { Component, Input, OnInit } from '@angular/core';
import { DocItem } from 'src/app/interfaces/doc-item.interface';

// ACE editor specific modules
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';
import { AceConfig } from 'ngx-ace-wrapper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-documentation-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() docItem!: DocItem;

  // Quests
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  config!: AceConfig;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }
}
