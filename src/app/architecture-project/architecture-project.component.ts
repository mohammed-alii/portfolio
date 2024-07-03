import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../services/projects.service';
import { project } from '../models/project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-architecture-project',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './architecture-project.component.html',
  styleUrl: './architecture-project.component.scss',
})
export class ArchitectureProjectComponent implements OnInit {
  currentProject: project = {} as project;
  id: any;
  constructor(
    private projectsData: ProjectsService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getCurrentProject();
  }

  getCurrentProject() {
    this.projectsData.getArchitecture().subscribe({
      next: (res: project[]) => {
        res.filter((project: project) => {
          if (project.id == this.id) {
            this.currentProject = project;
            console.log(this.id, project);
          }
        });
      },
    });
  }
}
