import {Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../classes/User';
import { BadgeService } from '../../badges/services/badge.service';
import { Badge } from '../../badges/classes/Badge';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User;

  @Output() deleteClicked = new EventEmitter<number>

  deleteUser(id: number, event: MouseEvent) {
    event.stopPropagation()

    this.deleteClicked.emit(id)
  }

  @Input() badges: any[];
  
  constructor(private badgeService:BadgeService) { }


  getBadgeImage(id: number) {
    for (const badge of this.badges) {
      if(badge.id = id)
        {
          return badge.image;
        }
    }
  }
}

