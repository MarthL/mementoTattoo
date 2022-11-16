import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TattoosListComponent } from './tattoos-list/tattoos-list.component';
import { HttpClientModule }  from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddTattooComponent } from './add-tattoo/add-tattoo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'tattoos', component: TattoosListComponent},
  { path: 'tattoos/add', component: AddTattooComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
