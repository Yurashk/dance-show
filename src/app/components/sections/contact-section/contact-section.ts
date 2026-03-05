import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

interface ContactLink {
  icon: string;
  labelKey: string;
  url: string;
  type: 'phone' | 'whatsapp' | 'instagram';
}

interface PriceItem {
  titleKey: string;
  descriptionKey: string;
  priceKey: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  private languageService = inject(LanguageService);
  
  contactInfo = {
    phone: '+380 00 000 0000',
    whatsapp: 'https://wa.me/380000000000',
    instagram: 'https://instagram.com/balletshow'
  };

  contactLinks: ContactLink[] = [
    { 
      icon: '📞', 
      labelKey: 'contact.phone', 
      url: 'tel:+380000000000', 
      type: 'phone' 
    },
    { 
      icon: '💬', 
      labelKey: 'contact.whatsapp', 
      url: this.contactInfo.whatsapp, 
      type: 'whatsapp' 
    },
    { 
      icon: '📸', 
      labelKey: 'contact.instagram', 
      url: this.contactInfo.instagram, 
      type: 'instagram' 
    }
  ];

  priceList: PriceItem[] = [
    { 
      titleKey: 'price.1.title', 
      descriptionKey: 'price.1.description', 
      priceKey: 'price.1.price' 
    },
    { 
      titleKey: 'price.2.title', 
      descriptionKey: 'price.2.description', 
      priceKey: 'price.2.price' 
    },
    { 
      titleKey: 'price.3.title', 
      descriptionKey: 'price.3.description', 
      priceKey: 'price.3.price' 
    },
    { 
      titleKey: 'price.4.title', 
      descriptionKey: 'price.4.description', 
      priceKey: 'price.4.price' 
    }
  ];

  get t() {
    return (key: string) => this.languageService.t(key);
  }
}
