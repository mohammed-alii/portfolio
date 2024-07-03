import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  sideBarActive: boolean;
  constructor() {
    this.sideBarActive = false
  }
  showSideBar() {
    this.sideBarActive = true
  }
  closeSideBar() {
    this.sideBarActive = false
  }
}
