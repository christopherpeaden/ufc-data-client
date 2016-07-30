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
var fighter_1 = require('./fighter');
var fighter_service_1 = require('./fighter.service');
var FighterDetailComponent = (function () {
    function FighterDetailComponent(fighterService, route) {
        this.fighterService = fighterService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    FighterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.fighterService.getFighter(id)
                    .then(function (fighter) { return _this.fighter = fighter; });
            }
            else {
                _this.navigated = false;
                _this.fighter = new fighter_1.Fighter();
            }
        });
    };
    FighterDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FighterDetailComponent.prototype.save = function () {
        var _this = this;
        this.fighterService
            .save(this.fighter)
            .then(function (fighter) {
            _this.fighter = fighter; // saved fighter, w/ id if new
            _this.goBack(fighter);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    FighterDetailComponent.prototype.goBack = function (savedFighter) {
        if (savedFighter === void 0) { savedFighter = null; }
        this.close.emit(savedFighter);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', fighter_1.Fighter)
    ], FighterDetailComponent.prototype, "fighter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FighterDetailComponent.prototype, "close", void 0);
    FighterDetailComponent = __decorate([
        core_1.Component({
            selector: 'fighter-detail',
            templateUrl: 'app/fighter-detail.component.html',
            styleUrls: ['app/fighter-detail.component.css']
        }), 
        __metadata('design:paramtypes', [fighter_service_1.FighterService, router_1.ActivatedRoute])
    ], FighterDetailComponent);
    return FighterDetailComponent;
}());
exports.FighterDetailComponent = FighterDetailComponent;
//# sourceMappingURL=fighter-detail.component.js.map