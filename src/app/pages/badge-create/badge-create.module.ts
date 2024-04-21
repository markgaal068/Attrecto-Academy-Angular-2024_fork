import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeCreateComponent } from './badge-create.component';
import { BadgeEditFormModule } from 'src/app/shared/modules/badges-edit-form/badges-edit-form.module';



@NgModule({
  declarations: [BadgeCreateComponent],
  imports: [
    CommonModule, BadgeEditFormModule
  ]
})
export class BadgeCreateModule { }