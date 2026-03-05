import { Routes } from '@angular/router';
import { SectionVideoMain } from './components/sections/section-video-main/section-video-main';

export const routes: Routes = [
  { path: '', component: SectionVideoMain },
  { path: 'video', component: SectionVideoMain },
  { path: '**', redirectTo: '' }
];
