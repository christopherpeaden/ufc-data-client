"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var fighter_search_service_1 = require('./fighter-search.service');
var FighterSearchComponent = (function () {
    function FighterSearchComponent(fighterSearchService, router) {
        this.fighterSearchService = fighterSearchService;
        this.router = router;
        this.searchSubject = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    FighterSearchComponent.prototype.search = function (term) { this.searchSubject.next(term); };
    FighterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fighters = this.searchSubject
            .asObservable() // cast as Observable
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.fighterSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // Todo: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    FighterSearchComponent.prototype.gotoDetail = function (fighter) {
        var link = ['/detail', fighter.id];
        this.router.navigate(link);
    };
    FighterSearchComponent = __decorate([
        core_1.Component({
            selector: 'fighter-search',
            templateUrl: 'app/fighter-search.component.html',
            providers: [fighter_search_service_1.FighterSearchService]
        }), 
        __metadata('design:paramtypes', [fighter_search_service_1.FighterSearchService, router_1.Router])
    ], FighterSearchComponent);
    return FighterSearchComponent;
}());
exports.FighterSearchComponent = FighterSearchComponent;
//# sourceMappingURL=fighter-search.component.js.map