import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getBooths(): Observable<project[]> {
    return this.http.get<project[]>('assets/json/booths.json')
  }
  getArchitecture(): Observable<project[]> {
    return this.http.get<project[]>('assets/json/architecture.json')
  }
}
