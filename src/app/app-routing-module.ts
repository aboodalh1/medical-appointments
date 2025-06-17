// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar'; // <--- Import your CalendarComponent here!
import { AppointmentListComponent } from './appointment-list/appointment-list';
// Make sure the path to your CalendarComponent is correct.

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent }, // This defines the '/calendar' route
  { path: 'appointments', component: AppointmentListComponent }, // This defines the '/calendar' route
  { path: '', redirectTo: '/appointments', pathMatch: 'full' }, // Optional: Redirects empty path to /calendar
  // { path: '**', redirectTo: '/calendar' } // Optional: Handles any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // RouterModule.forRoot() registers the routes at the root level
  exports: [RouterModule] // Exports RouterModule so it can be used in other modules (like AppModule)
})
export class AppRoutingModule { }