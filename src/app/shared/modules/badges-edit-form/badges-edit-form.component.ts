import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Badge } from 'src/app/pages/badges/classes/Badge';
import { BadgeService } from 'src/app/pages/badges/services/badge.service';

@Component({
  selector: 'app-badges-edit-form',
  standalone: true,
  imports: [],
  templateUrl: './badges-edit-form.component.html',
  styleUrl: './badges-edit-form.component.scss'
})
export class BadgesEditFormComponent {
  @Input() badge:Badge

  badgeCrateForm: FormGroup

  constructor(private badgeService: BadgeService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.badgeCrateForm = new FormGroup({
      name: new FormControl(this.badge ? this.badge.name :'', [Validators.minLength(3)],),
      image: new FormControl(this.badge ? this.badge.image : '',[Validators.required])
    })
  }

  saveForm() {
    const badgeFormData: Badge = this.badgeCrateForm.getRawValue()

    if(this.badge) {
      this.badgeService.updateBadge(this.badge.id, badgeFormData).subscribe({
        next: () => {
          this.router.navigate(['badges'])
        }
      })
    } else {
      this.badgeService.createBadge(badgeFormData).subscribe({
        next: () => {
          this.router.navigate(['badges'])
        }
      })
    }
  }
}
