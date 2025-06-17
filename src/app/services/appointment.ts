import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private mockAppointments: Appointment[] = [
    {
      id: 1,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Paid',
      status: 'Confirmed'
    },
    {
      id: 2,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Paid',
      status: 'Finished'
    },
    {
      id: 3,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Not Paid',
      status: 'Cancelled'
    },
    {
      id: 4,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Not Paid',
      status: 'Cancelled'
    },
    {
      id: 5,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Paid',
      status: 'In Progress'
    },
    {
      id: 6,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Not Paid',
      status: 'Arrived'
    },
    {
      id: 7,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Not Paid',
      status: 'Waiting'
    },
    {
      id: 8,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Not Paid',
      status: 'Confirmed'
    },
    {
      id: 9,
      name: 'John Lee',
      requiredServices: 'Eyelid Tightening',
      doctor: 'Dr. Kristin Maddi',
      doctorAvatar: 'assets/doctor-avatar.jpg',
      date: '20/9/2023',
      time: '16:00',
      phone: '+99754536464',
      cost: '200€',
      balance: '100€',
      remarks: '50€',
      paymentStatus: 'Paid',
      status: 'In Progress'
    }
  ];

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    return of(this.mockAppointments);
  }

  getAppointmentById(id: number): Observable<Appointment | undefined> {
    const appointment = this.mockAppointments.find(app => app.id === id);
    return of(appointment);
  }

  updateAppointmentStatus(id: number, status: Appointment['status']): Observable<boolean> {
    const appointment = this.mockAppointments.find(app => app.id === id);
    if (appointment) {
      appointment.status = status;
      return of(true);
    }
    return of(false);
  }

  updatePaymentStatus(id: number, paymentStatus: Appointment['paymentStatus']): Observable<boolean> {
    const appointment = this.mockAppointments.find(app => app.id === id);
    if (appointment) {
      appointment.paymentStatus = paymentStatus;
      return of(true);
    }
    return of(false);
  }

  searchAppointments(searchTerm: string): Observable<Appointment[]> {
    if (!searchTerm.trim()) {
      return of(this.mockAppointments);
    }
    
    const filtered = this.mockAppointments.filter(appointment =>
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.requiredServices.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.phone.includes(searchTerm)
    );
    
    return of(filtered);
  }

  filterByStatus(status: Appointment['status']): Observable<Appointment[]> {
    const filtered = this.mockAppointments.filter(appointment => appointment.status === status);
    return of(filtered);
  }

  getTodayAppointments(): Observable<Appointment[]> {
    // For demo purposes, we'll return all appointments
    // In a real app, you would filter by today's date
    return of(this.mockAppointments);
  }
}

