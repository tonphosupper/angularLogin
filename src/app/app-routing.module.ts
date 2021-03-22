import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnimalsComponent } from './create-animals/create-animals.component';
import { DetailsAnimalsComponent } from './details-animals/details-animals.component';
import { HomeComponent } from './home/home.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { LoadImagesComponent } from './load-images/load-images.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'loginsuccess',
    component: LoginsuccessComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'loadimages',
    component: LoadImagesComponent
  },
  {
    path:'animal',
    component: ListAnimalsComponent
  },
  {
    path:'createAnimal',
    component: CreateAnimalsComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'edit/:id',
    component: DetailsAnimalsComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
