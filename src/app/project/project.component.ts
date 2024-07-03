import { ActivatedRoute } from '@angular/router';
import { project } from '../models/project';
import { ProjectsService } from './../services/projects.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LightboxComponent } from '../lightbox/lightbox.component';



@Component({
  selector: 'app-project',
  standalone: true,
  imports: [LightboxComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  @ViewChild('lightbox') lightbox!: LightboxComponent;
  @Input() currentProject!: project
  id: any;
  constructor(private projectsData: ProjectsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
  }
  getCurrentProject() {
    this.projectsData.getBooths().subscribe({
      next: (res: project[]) => {
        res.filter((project: project) => {
          if(project.id == this.id) {
            this.currentProject = project
            console.log(this.id, project)
          }
        })
      }
    })
  }

  openLightbox(index: number): void {
    this.lightbox.openLightbox(index);
  }
}
