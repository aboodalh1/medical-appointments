import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  standalone: false,
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';
  submitted: boolean = false;

  submit() {
    // Placeholder for password reset logic
    this.submitted = true;
  }
} 