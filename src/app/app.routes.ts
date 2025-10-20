import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tutorials } from './pages/tutorials/tutorials';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => Home
  },
  {
    path: 'tutorial/:id',
    loadComponent: () => Tutorials
  }
];
