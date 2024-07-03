import { HttpErrorResponse } from '@angular/common/http';
import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { project } from '../models/project';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  projects: project[];
  constructor(private projectsData: ProjectsService) {
    this.projects = []
  }

  ngOnInit(): void {
    this.projectsData.getBooths().subscribe({
      next: (res: project[]) => {
        this.projects = res
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      },
      complete: () => {
        console.log('done')
      }
    })
  }
}
