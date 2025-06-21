import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phoneNumber: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
    register() {
    // Placeholder for register logic
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registering user ${this.fullName}`);
  }
} 