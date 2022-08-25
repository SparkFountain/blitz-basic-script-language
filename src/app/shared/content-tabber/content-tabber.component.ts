import { Component, Input, OnInit } from '@angular/core';

// ACE editor specific modules
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';
import { AceConfig } from 'ngx-ace-wrapper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocItem } from 'src/app/interfaces/doc-item.interface';

@Component({
  selector: 'app-content-tabber',
  templateUrl: './content-tabber.component.html',
  styleUrls: ['./content-tabber.component.scss'],
})
export class ContentTabberComponent implements OnInit {
  @Input() tabLabels!: string[];

  // Quests
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  config!: AceConfig;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // check tab labels for consistency
    if (this.tabLabels) {
      if (this.tabLabels.length < 3) {
        for (let i = this.tabLabels.length; i <= 3; i++) {
          this.tabLabels.push(`unknown ${i}s`);
        }
      }
    } else {
      this.tabLabels = ['unknown 1', 'unknown 2', 'unknown 3'];
    }

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
