import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TattoosListComponent } from './tattoos-list/tattoos-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTattooComponent } from './add-tattoo/add-tattoo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EditTattooComponent } from './edit-tattoo/edit-tattoo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TattoosListComponent,
    HomeComponent,
    NavbarComponent,
    AddTattooComponent,
    LoginComponent,
    EditTattooComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,     
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
