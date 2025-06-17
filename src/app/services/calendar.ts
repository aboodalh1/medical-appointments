import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalendarEvent, Person } from '../models/calendar-event';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private mockPeople: Person[] = [
    {
      id: 1,
      name: 'Lia Smith',
      avatar: 'assets/lia-avatar.jpg'
    },
    {
      id: 2,
      name: 'John Smith',
      avatar: 'assets/john-avatar.jpg'
    },
    {
      id: 3,
      name: 'Maria Geller',
      avatar: 'assets/maria-avatar.jpg'
    }
  ];

  private mockEvents: CalendarEvent[] = [
    // Lia Smith's appointments
    {
      id: 1,
      personId: 1,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '8:00',
      endTime: '8:30',
      duration: 1,
      type: 'botox',
      date: '2021-09-18'
    },
    {
      id: 2,
      personId: 1,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '9:00',
      endTime: '9:30',
      duration: 1,
      type: 'lina',
      date: '2021-09-18'
    },
    {
      id: 3,
      personId: 1,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '10:30',
      endTime: '11:30',
      duration: 2,
      type: 'treatment',
      date: '2021-09-18'
    },
    {
      id: 4,
      personId: 1,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '12:30',
      endTime: '13:00',
      duration: 1,
      type: 'treatment',
      date: '2021-09-18'
    },
    // John Smith's appointments
    {
      id: 5,
      personId: 2,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '8:30',
      endTime: '9:00',
      duration: 1,
      type: 'lina',
      date: '2021-09-18'
    },
    {
      id: 6,
      personId: 2,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '9:30',
      endTime: '10:00',
      duration: 1,
      type: 'consultation',
      date: '2021-09-18'
    },
    {
      id: 7,
      personId: 2,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '10:00',
      endTime: '10:30',
      duration: 1,
      type: 'lina',
      date: '2021-09-18'
    },
    {
      id: 8,
      personId: 2,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '11:00',
      endTime: '12:00',
      duration: 2,
      type: 'treatment',
      date: '2021-09-18'
    },
    {
      id: 9,
      personId: 2,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '12:30',
      endTime: '13:00',
      duration: 1,
      type: 'followup',
      date: '2021-09-18'
    },
    // Maria Geller's appointments
    {
      id: 10,
      personId: 3,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '8:00',
      endTime: '8:30',
      duration: 1,
      type: 'botox',
      date: '2021-09-18'
    },
    {
      id: 11,
      personId: 3,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '8:30',
      endTime: '9:00',
      duration: 1,
      type: 'consultation',
      date: '2021-09-18'
    },
    {
      id: 12,
      personId: 3,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '10:00',
      endTime: '10:30',
      duration: 1,
      type: 'consultation',
      date: '2021-09-18'
    },
    {
      id: 13,
      personId: 3,
      clientName: 'Lina',
      service: 'Botox',
      startTime: '11:00',
      endTime: '12:00',
      duration: 2,
      type: 'consultation',
      date: '2021-09-18'
    }
  ];

  constructor() { }

  getPeople(): Observable<Person[]> {
    return of(this.mockPeople);
  }

  getEventsForDate(date: string): Observable<CalendarEvent[]> {
    const events = this.mockEvents.filter(event => event.date === date);
    return of(events);
  }

  getEventsForTimeAndPerson(time: string, personId: number, date: string): Observable<CalendarEvent[]> {
    const events = this.mockEvents.filter(event => 
      event.date === date && 
      event.personId === personId && 
      event.startTime === time
    );
    return of(events);
  }

  addEvent(event: CalendarEvent): Observable<boolean> {
    event.id = this.mockEvents.length + 1;
    this.mockEvents.push(event);
    return of(true);
  }

  updateEvent(eventId: number, updatedEvent: Partial<CalendarEvent>): Observable<boolean> {
    const eventIndex = this.mockEvents.findIndex(event => event.id === eventId);
    if (eventIndex > -1) {
      this.mockEvents[eventIndex] = { ...this.mockEvents[eventIndex], ...updatedEvent };
      return of(true);
    }
    return of(false);
  }

  deleteEvent(eventId: number): Observable<boolean> {
    const eventIndex = this.mockEvents.findIndex(event => event.id === eventId);
    if (eventIndex > -1) {
      this.mockEvents.splice(eventIndex, 1);
      return of(true);
    }
    return of(false);
  }
}

