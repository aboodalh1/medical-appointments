import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type UserType = 'DOCTOR' | 'EMPLOYEE' | 'PATIENT' ;

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  type: UserType;
}

@Injectable({ providedIn: 'root' })
export class ManagementService {
  private apiUrl = 'https://jaramana-clinic-center.onrender.com/api'; // Change as needed

  constructor(private http: HttpClient) {}

  getUsers(type: UserType = 'EMPLOYEE'): Observable<User[]> {
    let url = `${this.apiUrl}/users`;
    if (type !== 'EMPLOYEE') {
      url += `?type=${type}`;
    }
    return this.http.get<User[]>(url);
  }

  addUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}
