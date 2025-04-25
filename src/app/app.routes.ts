import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('@pontuei/home').then((m) => m.homeRoutes),
  },
  {
    path: 'question',
    loadChildren: () =>
      import('@pontuei/question').then((m) => m.questionRoutes),
  },
];
