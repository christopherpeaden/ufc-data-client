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
var fighter_service_1 = require('./fighter.service');
var fighter_detail_component_1 = require('./fighter-detail.component');
var FightersComponent = (function () {
    function FightersComponent(router, fighterService) {
        this.router = router;
        this.fighterService = fighterService;
        this.addingFighter = false;
    }
    FightersComponent.prototype.getFighters = function () {
        var _this = this;
        this.fighterService.getFighters()
            .then(function (fighters) { return _this.fighters = fighters; })
            .catch(function (error) { return _this.error = error; });
    };
    FightersComponent.prototype.ngOnInit = function () {
        this.getFighters();
    };
    FightersComponent.prototype.addFighter = function () {
        this.addingFighter = true;
        this.selectedFighter = null;
    };
    FightersComponent.prototype.close = function (savedFighter) {
        this.addingFighter = false;
        if (savedFighter) {
            this.getFighters();
        }
    };
    FightersComponent.prototype.deleteFighter = function (fighter, event) {
        var _this = this;
        event.stopPropagation();
        this.fighterService
            .delete(fighter)
            .then(function (res) {
            _this.fighters = _this.fighters.filter(function (f) { return f !== fighter; });
            if (_this.selectedFighter === fighter) {
                _this.selectedFighter = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    FightersComponent.prototype.onSelect = function (fighter) { this.selectedFighter = fighter; };
    FightersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedFighter.id]);
    };
    FightersComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/fighters.component.html',
            styleUrls: ['app/fighters.component.css'],
            directives: [fighter_detail_component_1.FighterDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, fighter_service_1.FighterService])
    ], FightersComponent);
    return FightersComponent;
}());
exports.FightersComponent = FightersComponent;
//# sourceMappingURL=fighters.component.js.map