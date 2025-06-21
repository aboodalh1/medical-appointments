import { TestBed } from '@angular/core/testing';
import { Appointment } from '../models/appointment';
import { AppointmentService } from './appointment';


describe('Appointment', () => {
  let service: AppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
