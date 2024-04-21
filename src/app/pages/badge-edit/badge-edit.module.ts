import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditComponent } from './badge-edit.component';
import { UserEditFormModule } from '../../shared/modules/user-edit-form/user-edit-form.module';



@NgModule({
  declarations: [BadgeEditComponent],
  imports: [
    CommonModule,
    BadgeEditModule,
    UserEditFormModule,
  ],
})
export class BadgeEditModule { }