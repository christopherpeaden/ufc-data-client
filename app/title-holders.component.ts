import { Component, OnInit } from '@angular/core';
import { Fighter } from './fighter';
import { Http } from '@angular/http';
import { FighterService } from './fighter.service';
import { Router } from '@angular/router';
import { TitleHolderService } from './title-holder.service';


@Component({
  templateUrl: 'app/title-holders.component.html',
  styleUrls: ['app/title-holders.component.css']
})

export class TitleHoldersComponent {
  titleHolders: Array<Fighter>;

  constructor(
    private titleHolderService: TitleHolderService,
    private router: Router) { }

  getTitleHolders() {
    this.titleHolderService.getTitleHolders()
      .then(titleHolders => this.titleHolders = titleHolders);
  }

  ngOnInit() {
    this.getTitleHolders();
  }

  gotoDetail(titleHolder) {
    let link = ['/detail', titleHolder.id];
    this.router.navigate(link);
  }
}
