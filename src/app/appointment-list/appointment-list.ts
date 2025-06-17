import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.html',
  styleUrls: ['./appointment-list.css'],
  standalone: false
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  searchTerm = '';
  selectedRows: number[] = [];
  showTodayOnly = false;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      this.filteredAppointments = appointments;
    });
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.appointmentService.searchAppointments(this.searchTerm).subscribe(filtered => {
        this.filteredAppointments = filtered;
      });
    } else {
      this.filteredAppointments = this.appointments;
    }
  }

  onTodayFilterChange(): void {
    if (this.showTodayOnly) {
      this.appointmentService.getTodayAppointments().subscribe(filtered => {
        this.filteredAppointments = filtered;
      });
    } else {
      this.filteredAppointments = this.appointments;
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'status-confirmed';
      case 'finished': return 'status-finished';
      case 'cancelled': return 'status-cancelled';
      case 'in progress': return 'status-in-progress';
      case 'arrived': return 'status-arrived';
      case 'waiting': return 'status-waiting';
      default: return '';
    }
  }

  getPaymentStatusClass(status: string): string {
    return status === 'Paid' ? 'payment-paid' : 'payment-not-paid';
  }

  toggleRowSelection(id: number): void {
    const index = this.selectedRows.indexOf(id);
    if (index > -1) {
      this.selectedRows.splice(index, 1);
    } else {
      this.selectedRows.push(id);
    }
  }

  isRowSelected(id: number): boolean {
    return this.selectedRows.includes(id);
  }

  selectAllRows(): void {
    if (this.selectedRows.length === this.filteredAppointments.length) {
      this.selectedRows = [];
    } else {
      this.selectedRows = this.filteredAppointments.map(app => app.id);
    }
  }

  isAllSelected(): boolean {
    return this.selectedRows.length === this.filteredAppointments.length && this.filteredAppointments.length > 0;
  }

  changeSelectedStatus(newStatus: Appointment['status']): void {
    this.selectedRows.forEach(id => {
      this.appointmentService.updateAppointmentStatus(id, newStatus).subscribe(success => {
        if (success) {
          const appointment = this.appointments.find(app => app.id === id);
          if (appointment) {
            appointment.status = newStatus;
          }
        }
      });
    });
    this.selectedRows = [];
  }

  getSelectedCount(): number {
    return this.selectedRows.length;
  }

  getTotalAppointments(): number {
    return this.filteredAppointments.length;
  }
}

