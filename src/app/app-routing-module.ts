// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar'; // <--- Import your CalendarComponent here!
import { AppointmentListComponent } from './appointment-list/appointment-list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// Make sure the path to your CalendarComponent is correct.

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent }, // This defines the '/calendar' route
  { path: 'appointments', component: AppointmentListComponent }, // This defines the '/calendar' route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Optional: Redirects empty path to /calendar
  // { path: '**', redirectTo: '/calendar' } // Optional: Handles any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // RouterModule.forRoot() registers the routes at the root level
  exports: [RouterModule] // Exports RouterModule so it can be used in other modules (like AppModule)
})
export class AppRoutingModule { }