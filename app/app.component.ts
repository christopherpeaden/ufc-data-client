import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FighterService } from './fighter.service'
import { TitleHolderService } from './title-holder.service'
import './rxjs-extensions';

@Component({
  selector: 'ufc-statistics',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/title-holders']" routerLinkActive="active">Title Holders</a>
      <a [routerLink]="['/fighters']" routerLinkActive="active">Fighters</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [FighterService, TitleHolderService]
})

export class AppComponent { 
  title = 'Tour of Fighters';
}
