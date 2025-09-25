export type Match = {
  participants: string[];
  title?: string;
  stipulation?: string;
};

export type Event = {
  id: string;
  type: 'RAW' | 'SmackDown' | 'PPV';
  name?: string;
  date: string;
  day: number;
  location: string;
  venue?: string;
  matches: Match[];
};

export type MonthData = {
  month: string;
  events: Event[];
};

export type Chronology = MonthData[];
