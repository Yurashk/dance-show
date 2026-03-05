import { 
  Component, 
  OnInit, 
  OnDestroy, 
  inject, 
  PLATFORM_ID, 
  signal, 
  AfterViewInit 
} from '@angular/core';
import { isPlatformBrowser, CommonModule, Location } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css']
})
export class Navigation implements OnInit, AfterViewInit, OnDestroy {
  private languageService = inject(LanguageService);
  private platformId = inject(PLATFORM_ID);
  private location = inject(Location);
  
  activeFragment = signal<string>('hero');
  private observer: IntersectionObserver | null = null;

  navItems = [
    { fragment: 'hero', labelKey: 'nav.home' },
    { fragment: 'about', labelKey: 'nav.about' },
    { fragment: 'contact', labelKey: 'nav.contact' },
  ];

  get t() { return (key: string) => this.languageService.t(key); }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const hash = window.location.hash.replace('#', '');
      if (hash) this.activeFragment.set(hash);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Даем небольшую паузу для рендера секций
      setTimeout(() => this.initIntersectionObserver(), 500);
    }
  }

  // МЕТОД КЛИКА: Просто запускает физический скролл
  scrollTo(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private initIntersectionObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      // Зона "захвата" — тонкая линия в центре экрана (49% отступа сверху и снизу)
      rootMargin: '-49% 0px -49% 0px', 
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          
          // ТОЛЬКО ТУТ меняем состояние
          this.activeFragment.set(id);
          
          // Обновляем адресную строку "втихую"
          this.location.replaceState(`${window.location.pathname}#${id}`);
        }
      });
    }, options);

    this.navItems.forEach(item => {
      const el = document.getElementById(item.fragment);
      if (el) this.observer?.observe(el);
    });
  }

  isActive(fragment: string) { return this.activeFragment() === fragment; }

  ngOnDestroy() { if (this.observer) this.observer.disconnect(); }
}