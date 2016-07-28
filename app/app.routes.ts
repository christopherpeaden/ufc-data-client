import { provideRouter, RouterConfig } from '@angular/router';
import { TitleHoldersComponent } from './title-holders.component';
import { FightersComponent } from './fighters.component';
import { FighterDetailComponent } from './fighter-detail.component';

export const routes: RouterConfig = [
  { path: 'title-holders', component: TitleHoldersComponent },
  { path: 'fighters', component: FightersComponent },
  { path: 'detail/:id', component: FighterDetailComponent },
  { path: '', redirectTo: '/title-holders' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
