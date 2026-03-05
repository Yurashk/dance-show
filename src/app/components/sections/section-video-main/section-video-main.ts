import { Component, inject, PLATFORM_ID, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

interface Slide {
  image: string;
  description: string;
}

@Component({
  selector: 'app-section-video-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-video-main.html',
  styleUrl: './section-video-main.css',
})
export class SectionVideoMain implements OnInit, OnDestroy {
  private languageService = inject(LanguageService);
  private platformId = inject(PLATFORM_ID);
  private intervalId: any;
  
  currentSlide = signal(0);
  
  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1920&q=80',
      description: 'Experience the timeless elegance of classical ballet'
    },
    {
      image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1920&q=80',
      description: 'Passion and emotion in every movement'
    },
    {
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=80',
      description: 'Where tradition meets innovation'
    },
    {
      image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=1920&q=80',
      description: 'World-class dancers, unforgettable performance'
    }
  ];

  get t() {
    return (key: string) => this.languageService.t(key);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlider();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startSlider() {
    this.intervalId = setInterval(() => {
      this.currentSlide.update(v => (v + 1) % this.slides.length);
    }, 3000);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startSlider();
    }
  }

  scrollToNext(): void {
    if (isPlatformBrowser(this.platformId)) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
