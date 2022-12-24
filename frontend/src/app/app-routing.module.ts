import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TattoosListComponent } from './tattoos-list/tattoos-list.component';
import { HttpClientModule }  from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddTattooComponent } from './add-tattoo/add-tattoo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guard/auth.guard';
import { SeeTattooComponent } from './see-tattoo/see-tattoo.component';
import { ContactComponent } from './contact/contact.component';
import { EditTattooComponent } from './edit-tattoo/edit-tattoo.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'tattoos', component: TattoosListComponent},
  { path: 'tattoos/add', component: AddTattooComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  {path : 'tattoos/:id', component: SeeTattooComponent},
  {path: 'tattoos/edit/:id', component: EditTattooComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
