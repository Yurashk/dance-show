import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionVideoMain } from './components/sections/section-video-main/section-video-main';
import { ContactSection } from './components/sections/contact-section/contact-section';
import { AboutSection } from './components/sections/about-section/about-section';
import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SectionVideoMain, ContactSection, AboutSection, Navigation, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ballet-show-site');
}
