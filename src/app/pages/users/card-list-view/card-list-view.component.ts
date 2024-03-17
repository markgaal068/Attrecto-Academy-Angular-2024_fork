import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list-view',
  templateUrl: './card-list-view.component.html',
  styleUrls: ['./card-list-view.component.scss']
})
export class CardListViewComponent {
  @Input() users: any[];
  constructor(){}
}
