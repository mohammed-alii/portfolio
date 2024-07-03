import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { BoothProjectComponent } from './booth-project/booth-project.component';
import { ArchitectureProjectComponent } from './architecture-project/architecture-project.component';

export const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'booth/:id', component: BoothProjectComponent},
  {path: 'architecture', component: ArchitectureComponent},
  {path: 'architecture/:id', component: ArchitectureProjectComponent}
];
