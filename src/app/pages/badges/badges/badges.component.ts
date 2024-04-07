import {Component, OnInit} from '@angular/core';
import {Badge} from "../classes/Badge";
import {BadgeService} from "../services/badge.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent implements OnInit {
  badges: Badge[]

  constructor(private badgeService: BadgeService, private router:Router) {
  }

  ngOnInit() {
    this.getBadges()
  }

  navigateToEditBadge(badgeId:number){
    this.router.navigateByUrl(`badge-edit/${badgeId}`)
  }

  getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges
      }
    })
  }
}
