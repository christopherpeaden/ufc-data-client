import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Fighter } from './fighter';
import { FighterService } from './fighter.service';

@Component({
  selector: 'fighter-detail',
  templateUrl: 'app/fighter-detail.component.html',
  styleUrls: ['app/fighter-detail.component.css']
})

export class FighterDetailComponent implements OnInit, OnDestroy  {
  @Input() fighter: Fighter;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;

  constructor(
    private fighterService: FighterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.fighterService.getFighter(id)
          .then(fighter => this.fighter = fighter);
      }  else {
        this.navigated = false;
        this.fighter = new Fighter();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.fighterService
	.save(this.fighter)
	.then(fighter => {
	  this.fighter = fighter; // saved fighter, w/ id if new
	  this.goBack(fighter);
	})
	.catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedFighter: Fighter = null) {
    this.close.emit(savedFighter);
    if (this.navigated) { window.history.back(); }
  }
}
