import { Component } from '@angular/core';
import { ManagementService, UserType } from '../services/manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-add',
  standalone: false,
  templateUrl: './management-add.component.html',
  styleUrls: ['./management-add.component.css']
})
export class ManagementAddComponent {
  userType: UserType = 'DOCTOR';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  role: string = '';

  constructor(private managementService: ManagementService, private router: Router) {}

newEmployee = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: 'ADMIN'
  };
  addUser() {
    this.newEmployee.firstName = this.firstName;
    this.newEmployee.lastName = this.lastName;
    this.newEmployee.phoneNumber = this.phoneNumber;
    this.newEmployee.email = this.email;
    this.newEmployee.password = this.password;
    this.newEmployee.role = this.userType;
    this.managementService.createEmployee(this.newEmployee).subscribe({
      next: (res) => {
        alert('User created successfully');
        this.newEmployee = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          role: 'DOCTOR'
        };
                this.router.navigate(['/management'])

      },
      error: (err) => {
        alert('Failed to create user: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }



  onUserTypeChange() {
    // Optionally, you might want to clear the phone number if the user type changes away from 'patient'
    if (this.userType !== 'PATIENT') {

    }
  }



}
