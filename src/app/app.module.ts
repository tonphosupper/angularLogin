import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoadImagesComponent } from './load-images/load-images.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { CreateAnimalsComponent } from './create-animals/create-animals.component';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { DetailsAnimalsComponent } from './details-animals/details-animals.component';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ListuserComponent,
    LoginsuccessComponent,
    LoadImagesComponent,
    ListAnimalsComponent,
    CreateAnimalsComponent,
    LogoutComponent,
    HomeComponent,
    DetailsAnimalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBTvBwZHkUQ22Oi-A4HJjA-KoEoFpWn57I",
      authDomain: "upload-150eb.firebaseapp.com",
      projectId: "upload-150eb",
      storageBucket: "upload-150eb.appspot.com",
      messagingSenderId: "32336149958",
      appId: "1:32336149958:web:125c5c22943663d73ac6c7"
    }),
    AngularFireStorageModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
