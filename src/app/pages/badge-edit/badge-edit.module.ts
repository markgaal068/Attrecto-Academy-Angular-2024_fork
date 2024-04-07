import { NgModule } from "@angular/core";
import { BadgeEditComponent } from "./badge-edit.component";
import { CommonModule } from "@angular/common";
import { UserEditFormModule } from "src/app/shared/modules/user-edit-form/user-edit-form.module";

@NgModule({
    declarations: [BadgeEditComponent],
    imports: [
      CommonModule,
      UserEditFormModule
    ]
  })
  export class BadgeEditModule { }