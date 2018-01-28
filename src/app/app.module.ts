import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
// ROUTER
import { APP_ROUTING } from './app.routes';
// Google Maps Modules
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
// HTTP Module
import { HttpModule } from '@angular/http';
import { FormComponent } from './form/form.component';
// Form dependencies
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Firebase store
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { OrtopedistaFirebaseService } from './services/ortopedista-firebase.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
// Login
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


// API : AIzaSyBFjJqSMdWXabIGgawuiv9WZoYBNG4bRnE

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    FormComponent,
    HomePageComponent,
    AdminComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'ortopedista-db-fbs'),
    CommonModule,
    APP_ROUTING,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFjJqSMdWXabIGgawuiv9WZoYBNG4bRnE'
    })
  ],
  providers: [
    OrtopedistaFirebaseService,
    AngularFireAuth,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
