import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../../services/language.service';

@Component({
  selector: 'app-choose-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-language.html',
  styleUrl: './choose-language.css',
})
export class ChooseLanguage {
  private languageService = inject(LanguageService);
  
  languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  ];

  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }

  setLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
  }

  isOpen = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  getCurrentLanguageInfo() {
    return this.languages.find(l => l.code === this.currentLanguage);
  }
}
