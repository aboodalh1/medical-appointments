import { Component, OnInit } from '@angular/core';
import { CalendarEvent, Person } from '../models/calendar-event';
import { CalendarService } from '../services/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css'],
  standalone: false
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date(2021, 8, 18); // September 18, 2021
  monthView: boolean = false;
  people: Person[] = [];
  events: CalendarEvent[] = [];
  
  timeSlots: string[] = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'
  ];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.loadPeople();
    this.loadEvents();
  }

  loadPeople(): void {
    this.calendarService.getPeople().subscribe(people => {
      this.people = people;
    });
  }

  loadEvents(): void {
    const dateString = this.formatDate(this.currentDate);
    this.calendarService.getEventsForDate(dateString).subscribe(events => {
      this.events = events;
    });
  }

  previousDay(): void {
    this.currentDate = new Date(this.currentDate.getTime() - 24 * 60 * 60 * 1000);
    this.loadEvents();
  }

  nextDay(): void {
    this.currentDate = new Date(this.currentDate.getTime() + 24 * 60 * 60 * 1000);
    this.loadEvents();
  }

  toggleView(): void {
    // Toggle between day and month view
    // For now, we'll just keep the day view
  }

  getAppointmentsForTimeAndPerson(timeSlot: string, personId: number): CalendarEvent[] {
    return this.events.filter(event => 
      event.startTime === timeSlot && event.personId === personId
    );
  }

  getAppointmentClass(type: string): string {
    return `appointment-${type}`;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}

