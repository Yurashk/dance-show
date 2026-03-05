import { Component, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface AnchorLink {
  id: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-side-anchor-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div class="flex flex-col gap-3 bg-bg-secondary/80 backdrop-blur-lg border border-border rounded-full px-3 py-4">
        @for (link of links(); track link.id) {
          <a 
            [routerLink]="['/']"
            [fragment]="link.id"
            routerLinkActive="text-purple-primary"
            class="group relative w-3 h-3 rounded-full bg-bg-tertiary hover:bg-purple-primary transition-all duration-300"
            [title]="link.label"
          >
            <span class="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-bg-elevated text-text-secondary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {{ link.label }}
            </span>
          </a>
        }
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SideAnchorMenuComponent {
  private _links = signal<AnchorLink[]>([
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О нас' },
    { id: 'performances', label: 'Спектакли' },
    { id: 'tickets', label: 'Билеты' },
    { id: 'contacts', label: 'Контакты' },
  ]);

  readonly links = computed(() => this._links());

  addLink(link: AnchorLink) {
    this._links.update(links => [...links, link]);
  }

  removeLink(id: string) {
    this._links.update(links => links.filter(l => l.id !== id));
  }

  updateLink(id: string, updates: Partial<AnchorLink>) {
    this._links.update(links => 
      links.map(l => l.id === id ? { ...l, ...updates } : l)
    );
  }
}
