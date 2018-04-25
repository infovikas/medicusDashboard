import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { StatsService } from './services/stats.service';


import { HttpService } from './services/http.service';
import { AuthGuard } from './authgaurd/auth.gaurd';
import { AuthenticationService } from './services/auth.service';
import { AppointmentService } from './services/appointment.service';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SignupnextComponent } from './authentication/signupnext/signupnext.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { OfficeComponent } from './forms/doctor/office/office.component';
import { PatientRoomComponent } from './patient-room/patient-room.component';
import { PrecreptionComponent } from './forms/doctor/precreption/precreption.component';
import { SlotComponent } from './forms/doctor/slot/slot.component';
import { CancelAppointComponent } from './forms/doctor/cancel-appoint/cancel-appoint.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PaymentsComponent,
    StatsComponent,
    SettingsComponent,
    HelpComponent,
    AboutComponent,
    AppointmentsComponent,
    SigninComponent,
    SignupComponent,
    SignupnextComponent,
    LandingPageComponent,
    DashboardComponent,
    OtpComponent,
    OfficeComponent,
    PatientRoomComponent,
    PrecreptionComponent,
    SlotComponent,
    CancelAppointComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'otp', component: OtpComponent },
      // {
      //   path: 'signup',
      //   component: SignupComponent,
      //   children: [
      //     { path: 'signupnext', component: SignupnextComponent }
      //   ]
      // },
      { path: 'signupnext', component: SignupnextComponent },
      { path: 'signin', component: SigninComponent },
      {
        path: 'dashboard',
        component: DashboardComponent, canActivate: [AuthGuard],
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'payments', component: PaymentsComponent },
          { path: 'stats', component: StatsComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'about', component: AboutComponent },
          { path: 'help', component: HelpComponent },
          { path: 'appointments', component: AppointmentsComponent },
          { path: 'patientRoom', component: PatientRoomComponent }
        ]
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  entryComponents: [
    OfficeComponent,
    PrecreptionComponent,
    SlotComponent,
    CancelAppointComponent
  ],
  providers: [
    StatsService,
    HttpService,
    AuthenticationService,
    AppointmentService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
