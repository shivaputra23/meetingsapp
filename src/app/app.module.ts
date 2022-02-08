import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { BookingformComponent } from './bookings/bookingform/bookingform.component';
import { BookingsComponent } from './bookings/bookings/bookings.component';
import { RoomsComponent } from './rooms/rooms/rooms.component';
import { RoomsformComponent } from './rooms/roomsform/roomsform.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BookingformComponent,
    BookingsComponent,
    RoomsComponent,
    RoomsformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
