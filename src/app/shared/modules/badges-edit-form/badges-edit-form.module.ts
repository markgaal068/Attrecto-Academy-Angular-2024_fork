import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsControlRequiredPipe } from './pipes/is-control-required.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgesEditFormComponent } from './badges-edit-form.component';



@NgModule({
  declarations: [IsControlRequiredPipe, BadgesEditFormComponent],
  exports:[
    BadgesEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class BadgeEditFormModule { }