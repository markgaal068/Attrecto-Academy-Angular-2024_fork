import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CounterComponent } from './shared/counter/counter.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './pages/users/users.module';
import { BadgesModule } from './pages/badges/badges.module';
import {HttpClientModule} from "@angular/common/http";
import { ErrorCompComponent } from './pages/error-comp/error-comp.component';

@NgModule({
  declarations: [AppComponent, ErrorCompComponent],
  imports: [BrowserModule, HeaderComponent, CounterComponent, RouterOutlet, AppRoutingModule, UsersModule, BadgesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
