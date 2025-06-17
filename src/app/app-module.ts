import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { AppointmentListComponent } from './appointment-list/appointment-list';
import { CalendarComponent } from './calendar/calendar';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    App,
    AppointmentListComponent,
    CalendarComponent
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
