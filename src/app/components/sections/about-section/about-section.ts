import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

interface GalleryItem {
  image: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  private languageService = inject(LanguageService);
  
  galleryItems: GalleryItem[] = [
    {
      image: 'assets/dance.jpg',
      titleKey: 'gallery.1.title',
      descriptionKey: 'gallery.1.description'
    },
    {
      image: 'assets/dance.jpg',
      titleKey: 'gallery.2.title',
      descriptionKey: 'gallery.2.description'
    },
    {
      image: 'assets/dance.jpg',
      titleKey: 'gallery.3.title',
      descriptionKey: 'gallery.3.description'
    },
    {
      image: 'assets/dance.jpg',
      titleKey: 'gallery.4.title',
      descriptionKey: 'gallery.4.description'
    },
  ];

  get t() {
    return (key: string) => this.languageService.t(key);
  }
}
