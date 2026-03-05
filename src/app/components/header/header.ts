import { Component } from '@angular/core';
import { ChooseLanguage } from '../sections/choose-language/choose-language';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ChooseLanguage],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
