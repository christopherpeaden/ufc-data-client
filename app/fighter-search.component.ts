import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { FighterSearchService } from './fighter-search.service';
import { Fighter } from './fighter';

@Component({
  selector: 'fighter-search',
  templateUrl: 'app/fighter-search.component.html',
  providers: [FighterSearchService]
})
export class FighterSearchComponent implements OnInit {
  fighters: Observable<Fighter[]>;
  searchSubject = new Subject<string>();
  constructor(
    private fighterSearchService: FighterSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string) { this.searchSubject.next(term); }
  ngOnInit() {
    this.fighters = this.searchSubject
      .asObservable()           // cast as Observable
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.fighterSearchService.search(term)
        // or the observable of empty fighters if no search term
        : Observable.of<Fighter[]>([]))
      .catch(error => {
        // Todo: real error handling
        console.log(error);
        return Observable.of<Fighter[]>([]);
      });
  }
  gotoDetail(fighter: Fighter) {
    let link = ['/detail', fighter.id];
    this.router.navigate(link);
  }
}

