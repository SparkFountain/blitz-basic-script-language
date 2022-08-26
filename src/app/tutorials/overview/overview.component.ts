import { Component, OnInit } from '@angular/core';

interface TutorialSection {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  sections!: TutorialSection[];

  constructor() {}

  ngOnInit(): void {
    this.sections = [
      {
        name: 'basics',
        icon: 'bolt',
      },
      {
        name: 'graphics',
        icon: 'palette',
      },
      {
        name: 'io',
        icon: 'keyboard',
      },
      {
        name: 'sound',
        icon: 'headphones',
      },
      {
        name: 'gui',
        icon: 'widgets',
      },
      {
        name: 'cloud',
        icon: 'cloud',
      },
      {
        name: 'particles',
        icon: 'flare',
      },
      {
        name: 'meshes',
        icon: 'view_in_ar',
      },
    ];
  }
}
