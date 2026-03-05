import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'fr' | 'nl';

export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    nl: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'ballet-show-language';
  private platformId = inject(PLATFORM_ID);
  
  currentLanguage = signal<Language>(this.getStoredLanguage());

  private translations: Translations = {
    'nav.home': { en: 'Home', fr: 'Accueil', nl: 'Home' },
    'nav.about': { en: 'About Us', fr: 'À propos', nl: 'Over ons' },
    'nav.contact': { en: 'Contact', fr: 'Contact', nl: 'Contact' },
    
    'video.title': { en: 'Ballet Show', fr: 'Spectacle de Ballet', nl: 'Ballet Show' },
    'video.description': { 
      en: 'Unique ballet performance combining classical elegance and modern art',
      fr: 'Spectacle de ballet unique alliant élégance classique et art moderne',
      nl: 'Uniek balletvoorstelling die klassieke elegantie en moderne kunst combineert'
    },
    
    'about.title': { en: 'About Us', fr: 'À propos de nous', nl: 'Over ons' },
    'about.badge': { en: 'The Art of Dance', fr: 'L\'art de la danse', nl: 'De kunst van dans' },
    'about.subtitle': { 
      en: 'Where passion meets perfection', 
      fr: 'Où la passion rencontre la perfection', 
      nl: 'Waar passie perfectie ontmoet' 
    },
    'about.storyTitle': { en: 'Our Story', fr: 'Notre histoire', nl: 'Ons verhaal' },
'about.story': { 
      en: 'For over 15 years, we have been bringing the magic of ballet to audiences across Europe. Our troupe combines the grace of classical technique with bold contemporary vision, creating performances that touch the soul. Every dancer here has dedicated their life to perfecting their art, and it shows in every movement, every leap, every emotion on stage.',
      fr: 'Depuis plus de 15 ans, nous apportons la magie du ballet aux publics à travers l\'Europe. Notre troupe combine la grace de la technique classique avec une vision contemporaine audacieuse, creant des performances qui touchent l\'ame. Chaque danseur ici a dedie sa vie a perfectionner son art, et cela se voit dans chaque mouvement, chaque saut, chaque emotion sur scene.',
      nl: 'Al meer dan 15 jaar brengen wij de magie van ballet naar publiek in heel Europa. Onze groep combineert de gratie van klassieke techniek met een gedurfde contemporaine visie, en creëert voorstellingen die de ziel raken. Elke danser hier heeft zijn leven gewijd aan het perfectioneren van zijn kunst, en dat is te zien in elke beweging, elke sprong, elke emotie op het podium.'
    },
    'about.galleryTitle': { en: 'Our Performances', fr: 'Nos représentations', nl: 'Onze voorstellingen' },
    
    'gallery.1.title': { en: 'Classical Elegance', fr: 'Élégance Classique', nl: 'Klassieke Elegantie' },
    'gallery.1.description': { en: 'Timeless beauty in every movement', fr: 'Beauté intemporelle dans chaque mouvement', nl: 'Tijdloze schoonheid in elke beweging' },
    
    'gallery.2.title': { en: 'Contemporary Vision', fr: 'Vision Contemporaine', nl: 'Contemporaine Visie' },
    'gallery.2.description': { en: 'Bold new interpretations of classic tales', fr: 'Nouvelles audacieuses interprétations de contes classiques', nl: 'Gedurfde nieuwe interpretaties van klassieke verhalen' },
    
    'gallery.3.title': { en: 'Emotional Depth', fr: 'Profondeur Émotionnelle', nl: 'Emotionele Diepte' },
    'gallery.3.description': { en: 'Stories that touch your heart', fr: 'Des histoires qui touchent votre coeur', nl: 'Verhalen die je hart raken' },
    
    'gallery.4.title': { en: 'Technical Mastery', fr: 'Maîtrise Technique', nl: 'Technische Beheersing' },
    'gallery.4.description': { en: 'Precision and grace combined', fr: 'Précision et grâce combinées', nl: 'Precisie en gratie gecombineerd' },
    
    'contact.title': { en: 'Contact', fr: 'Contact', nl: 'Contact' },
    'contact.phone': { en: 'Call us', fr: 'Appelez-nous', nl: 'Bel ons' },
    'contact.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp', nl: 'WhatsApp' },
    'contact.instagram': { en: 'Instagram', fr: 'Instagram', nl: 'Instagram' },
    'contact.follow': { en: 'Follow us', fr: 'Suivez-nous', nl: 'Volg ons' },
    
    'price.1.title': { en: 'Standard', fr: 'Standard', nl: 'Standaard' },
    'price.1.description': { en: 'Basic seating', fr: 'Place assise básica', nl: 'Basisplaats' },
    'price.1.price': { en: '€30', fr: '30€', nl: '€30' },
    
    'price.2.title': { en: 'Premium', fr: 'Premium', nl: 'Premium' },
    'price.2.description': { en: 'Front rows, better view', fr: 'Premières rangées, meilleure vue', nl: 'Voorste rijen, beter zicht' },
    'price.2.price': { en: '€50', fr: '50€', nl: '€50' },
    
    'price.3.title': { en: 'VIP', fr: 'VIP', nl: 'VIP' },
    'price.3.description': { en: 'Best seats + program', fr: 'Meilleures places + programme', nl: 'Beste stoelen + programma' },
    'price.3.price': { en: '€80', fr: '80€', nl: '€80' },
    
    'price.4.title': { en: 'Group', fr: 'Groupe', nl: 'Groep' },
    'price.4.description': { en: '10+ people', fr: '10+ personnes', nl: '10+ personen' },
    'price.4.price': { en: '€25', fr: '25€', nl: '€25' },
  };

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private getStoredLanguage(): Language {
    if (!this.isBrowser()) return 'en';
    
    const stored = localStorage.getItem(this.storageKey);
    if (stored === 'en' || stored === 'fr' || stored === 'nl') {
      return stored;
    }
    return 'en';
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    if (this.isBrowser()) {
      localStorage.setItem(this.storageKey, lang);
    }
  }

  t(key: string): string {
    const lang = this.currentLanguage();
    const translation = this.translations[key];
    return translation ? translation[lang] : key;
  }
}
