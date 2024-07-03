import { NgClass, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule, NgClass], 
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;
  isOpen: boolean = false;
  fadeOut: boolean = false;

  openLightbox(index: number): void {
    this.currentIndex = index;
    this.isOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  closeLightbox(): void {
    this.isOpen = false;
    document.body.style.overflow = ''; // Allow background scroll
  }

  prevImage(): void {
    this.fadeOutImage(() => {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
      this.fadeInImage();
    });
  }

  nextImage(): void {
    this.fadeOutImage(() => {
      this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
      this.fadeInImage();
    });
  }

  fadeOutImage(callback: () => void): void {
    this.fadeOut = true;
    setTimeout(() => {
      callback();
      this.fadeOut = false;
    }, 500); // Match this duration with the CSS transition duration
  }

  fadeInImage(): void {
    this.fadeOut = false;
  }
}
