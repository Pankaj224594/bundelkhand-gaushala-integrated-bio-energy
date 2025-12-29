
export interface NavItem {
  label: string;
  path: string;
  category?: string;
}

export interface SectionContent {
  title: string;
  description: string;
  points?: string[];
  visualHint?: string;
  downloadData?: {
    filename: string;
    content: string;
    label: string;
  };
}

export interface PageBlueprint {
  id: string;
  title: string;
  purpose: string;
  tone: string;
  sections: SectionContent[];
}
