export interface Note {
  tag: string;
  title: string;
  meta: string;
}

export const notes: Note[] = [
  { tag: "E-book", title: "10-slide thesis defense checklist", meta: "PDF, 6 pages, free" },
  { tag: "Data", title: "How I clean survey data without breaking it", meta: "Note, 5 min read" },
  { tag: "SEO", title: "Keyword mapping for beginners (econ-niche example)", meta: "Guide, 8 min read" },
];
