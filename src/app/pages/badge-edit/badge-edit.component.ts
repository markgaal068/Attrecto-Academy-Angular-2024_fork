import { Component } from '@angular/core';
import { Badge } from '../badges/classes/Badge';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '../badges/services/badge.service';

@Component({
  selector: 'app-badge-edit',
  standalone: true,
  imports: [],
  templateUrl: './badge-edit.component.html',
  styleUrl: './badge-edit.component.scss'
})

export class BadgeEditComponent {
  badge: Badge

  constructor(private route: ActivatedRoute, private badgeService: BadgeService) {
    this.getBadge()
  }

  getBadge() {
    const badgeId = parseInt(this.route.snapshot.paramMap.get('badgeId'))
    this.badgeService.getBadge(badgeId).subscribe({
      next: (badge: any) => {
        this.badge = badge
      }
    })

  }
}

