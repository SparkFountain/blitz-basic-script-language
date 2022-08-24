import { Component, OnInit } from '@angular/core';

interface TutorialSection {
  name: string;
  icon: string;
  chapters: string[];
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
        chapters: [
          'variables',
          'functions'
        ],
      },
      {
        name: 'graphics',
        icon: 'palette',
        chapters: [],
      },
      {
        name: 'io',
        icon: 'keyboard',
        chapters: [],
      },
      {
        name: 'sound',
        icon: 'headphones',
        chapters: [],
      },
      {
        name: 'gui',
        icon: 'widgets',
        chapters: [],
      },
      {
        name: 'cloud',
        icon: 'cloud',
        chapters: [],
      },
      {
        name: 'particles',
        icon: 'flare',
        chapters: [],
      },
      {
        name: 'meshes',
        icon: 'view_in_ar',
        chapters: [],
      },
    ];
  }
}
