import { Component, OnInit } from '@angular/core';
import { project } from '../models/project';
import { ProjectsService } from '../services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent implements OnInit{
  projects: project[];
  constructor(private projectsData: ProjectsService) {
    this.projects = []
  }

  ngOnInit(): void {
    this.projectsData.getArchitecture().subscribe({
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
