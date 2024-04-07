import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesEditFormComponent } from './badges-edit-form.component';
import { IsControlRequiredPipe } from './pipes/is-control-required.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BadgesEditFormComponent, IsControlRequiredPipe],
  exports: [
    BadgesEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class BadgesEditFormModule { }
