export interface Topic {
  label?: string;
  sections: TopicSection[];
}

export interface TopicSection {
  label: string;
  path?: string;
}
