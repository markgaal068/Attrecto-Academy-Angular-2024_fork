import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Badge} from "../classes/Badge";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private httpClient: HttpClient) { }

  getBadges(): Observable<Badge[]> {
    return this.httpClient.get<Badge[]>(`${environment.apiUrl}/badges`)
  }

  getBadge(badgeId:number):Observable<Badge>{
    return this.httpClient.get<Badge>(`${environment.apiUrl}/badges/${badgeId}`)
  }

  createBadge(badge:Badge) {
    return this.httpClient.post(`${environment.apiUrl}/badge`,badge)
  }

  updateBadge(id: number,badge:Badge) {
    return this.httpClient.put(`${environment.apiUrl}/badge/(${id}`,badge)
  }

  deleteBadge(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/badge/${id}`)
  }

}
