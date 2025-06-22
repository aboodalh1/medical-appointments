import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  submitted: boolean = false;

  submit() {
    // Placeholder for password reset logic
    this.submitted = true;
  }
} 