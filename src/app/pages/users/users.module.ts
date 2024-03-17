import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TableListViewComponent } from './table-list-view/table-list-view.component';
import { CardListViewComponent } from './card-list-view/card-list-view.component';


@NgModule({
  declarations: [UsersComponent, UserCardComponent, TableListViewComponent, CardListViewComponent,],
  imports: [
    CommonModule, 
  ]
})
export class UsersModule { }
