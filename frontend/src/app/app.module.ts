import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TattoosListComponent } from './tattoos-list/tattoos-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TattoosListComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
