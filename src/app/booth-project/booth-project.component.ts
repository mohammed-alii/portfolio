import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { project } from '../models/project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-booth-project',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './booth-project.component.html',
  styleUrl: './booth-project.component.scss'
})
export class BoothProjectComponent implements OnInit{
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
    this.projectsData.getBooths().subscribe({
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
