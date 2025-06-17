export interface Appointment {
  id: number;
  name: string;
  requiredServices: string;
  doctor: string;
  doctorAvatar: string;
  date: string;
  time: string;
  phone: string;
  cost: string;
  balance: string;
  remarks: string;
  paymentStatus: 'Paid' | 'Not Paid';
  status: 'Confirmed' | 'Finished' | 'Cancelled' | 'In Progress' | 'Arrived' | 'Waiting';
}

