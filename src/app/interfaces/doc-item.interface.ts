export interface DocItem {
  name: string;
  description: string;
  examples: DocItemExample[];
  quests: any[]; // TODO: add data type
}

export interface DocItemExample {
  title: string;
  code: string;
}
