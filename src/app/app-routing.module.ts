import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './shared/counter/counter.component';

import { UsersComponent } from './pages/users/users/users.component';
import { BadgesComponent } from './pages/badges/badges/badges.component';
import {UserCreateComponent} from "./pages/user-create/user-create.component";
import { ErrorCompComponent } from './pages/error-comp/error-comp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'user-create', component:UserCreateComponent},
  {path: '**', component: ErrorCompComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
