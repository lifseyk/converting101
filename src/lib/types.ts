export type ImagePlaceholderBlock = {
  type: "image";
  label: string;
  src?: string;
  credit?: string;
};

export type LeadBlock = {
  type: "lead";
  text: string;
};

export type DefinitionItem = {
  term: string;
  definition: string;
};

export type DefinitionsBlock = {
  type: "definitions";
  kicker?: string;
  heading?: string;
  intro?: string;
  items: DefinitionItem[];
  columns?: 2 | 3 | 4;
};

export type MethodSubItem = {
  title: string;
  description: string;
};

export type MethodItem = {
  tag?: string;
  title: string;
  description: string;
  image?: string;
  why?: string;
  uses?: string;
  subitems?: MethodSubItem[];
};

export type MethodsBlock = {
  type: "methods";
  kicker?: string;
  heading?: string;
  intro?: string;
  items: MethodItem[];
};

export type OtherListItem = {
  tag?: string;
  title: string;
  description: string;
};

export type OtherListBlock = {
  type: "otherList";
  kicker?: string;
  heading?: string;
  intro?: string;
  items: OtherListItem[];
};

export type ComparisonTableBlock = {
  type: "table";
  kicker?: string;
  heading?: string;
  columns: string[];
  rows: string[][];
};

export type ProseBlock = {
  type: "prose";
  kicker?: string;
  heading?: string;
  paragraphs: string[];
};

export type CalloutBlock = {
  type: "callout";
  text: string;
};

export type ClosingBlock = {
  type: "closing";
  paragraphs: string[];
  ctas: { label: string; href: string }[];
};

export type ContentBlock =
  | ImagePlaceholderBlock
  | LeadBlock
  | DefinitionsBlock
  | MethodsBlock
  | OtherListBlock
  | ComparisonTableBlock
  | ProseBlock
  | CalloutBlock
  | ClosingBlock;

export type Topic = {
  slug: string;
  navLabel: string;
  kicker: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
};
