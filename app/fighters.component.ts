import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fighter } from './fighter';
import { FighterService } from './fighter.service';
import { FighterDetailComponent } from './fighter-detail.component';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'app/fighters.component.html',
  styleUrls: ['app/fighters.component.css'],
  directives: [FighterDetailComponent]
})

export class FightersComponent {
  fighters: Array<Fighter>;
  error: any;
  selectedFighter: Fighter;
  addingFighter = false;

  constructor(
    private router: Router,
    private fighterService: FighterService) { }

  getFighters() {
    this.fighterService.getFighters()
      .then(fighters => this.fighters = fighters)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getFighters();
  }

  addFighter() {
    this.addingFighter = true;
    this.selectedFighter = null;
  }

  close(savedFighter: Fighter) {
    this.addingFighter = false;
    if (savedFighter) { this.getFighters(); }
  }

  deleteFighter(fighter: Fighter, event: any) {
    event.stopPropagation();
    this.fighterService
        .delete(fighter)
        .then(res => {
          this.fighters = this.fighters.filter(f => f !== fighter);
          if (this.selectedFighter === fighter) { this.selectedFighter = null; }
        })
        .catch(error => this.error = error);
  }

  onSelect(fighter: Fighter) { this.selectedFighter = fighter; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedFighter.id]);
  }
}
