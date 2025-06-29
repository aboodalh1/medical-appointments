import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  phoneNumber: string;
  role: string;
}
export type UserType = 'DOCTOR' | 'EMPLOYEE' | 'PATIENT' ;

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  private apiUrl = 'https://jaramana-clinic-center.onrender.com/api/employee';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Or from SessionService
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllEmployees(page = 0, size = 10): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`, {
    headers: this.getHeaders()
  });
}

getDoctors(): Observable<any> {
  return this.http.get<any>(`https://jaramana-clinic-center.onrender.com/api/employee/doctors`, {
    headers: this.getHeaders()
  });
}

getPatients(page = 0, size = 10): Observable<any> {
  return this.http.get<any>(`https://jaramana-clinic-center.onrender.com/api/employee/patients?page=${page}&size=${size}`, {
    headers: this.getHeaders()
  });
}

  createEmployee(employee: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    role: string
  }): Observable<any> {
    console.log(employee.firstName);
    return this.http.post<any>(this.apiUrl, employee, {
      headers: this.getHeaders()
    });
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
}
