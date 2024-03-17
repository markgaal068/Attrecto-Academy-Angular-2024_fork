import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-list-view',
  templateUrl: './table-list-view.component.html',
  styleUrls: ['./table-list-view.component.scss']
})
export class TableListViewComponent {
  @Input() users: any[];
  constructor(){}
}
