import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { AppointmentListComponent } from './appointment-list/appointment-list';
import { CalendarComponent } from './calendar/calendar';
import { AppRoutingModule } from './app-routing-module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    App,
    AppointmentListComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
