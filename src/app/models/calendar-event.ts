export interface CalendarEvent {
  id: number;
  personId: number;
  clientName: string;
  service: string;
  startTime: string;
  endTime: string;
  duration: number; // in 30-minute blocks
  type: 'botox' | 'lina' | 'consultation' | 'treatment' | 'followup';
  date: string;
}

export interface Person {
  id: number;
  name: string;
  avatar: string;
}

