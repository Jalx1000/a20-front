import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'problem-1',
    loadComponent: () =>
      import('./pages/problem-1/problem-1.component').then(
        (m) => m.Problem1Component
      ),
  },
  {
    path: 'problem-2',
    loadComponent: () =>
      import('./pages/problem-2/problem-2.component').then(
        (m) => m.Problem2Component
      ),
  },
];
