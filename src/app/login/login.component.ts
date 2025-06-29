import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthStates } from './auth_states';
import { Router } from '@angular/router'; // Import Router
import { Session } from '../Utils/session/session';
import { SessionService } from '../services/sessionService.service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public AuthStates = AuthStates; // هذه هي الخطوة الأساسية
  email:  string = '';
  password: string = '';
  state : AuthStates = AuthStates.Success;
  error: string = '';
  constructor(
    private session: SessionService, // ✅ Inject the singleton session
    private router: Router, private authService: AuthService ) {
    setTimeout(() => {
      this.state = AuthStates.Success;
    }, 2000);
  }

  login() {
    if( this.email.length<3 || !this.email.includes(".com")){
      this.state = AuthStates.Failure;
      this.error = "Invalid Email";
      return;
    }

    if(this.password.length<8 ){
      this.state = AuthStates.Failure;
      this.error = "Incorrect password";
      return;
    }

    this.state = AuthStates.Loading;
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.state = AuthStates.Success;
        this.router.navigate(['/appointments'])
        alert('Login successful!');
        this.session.token = response?.data?.accessToken;
        localStorage.setItem("token",this.session.token);
        console.log(this.session.token);
        // You can add navigation or token storage here
      },
      error: (err) => {
        this.state = AuthStates.Failure;
        this.error = err.error?.message;
      }
    });
  }
}
