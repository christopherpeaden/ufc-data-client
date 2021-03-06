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
var title_holder_service_1 = require('./title-holder.service');
var fighter_search_component_1 = require('./fighter-search.component');
var TitleHoldersComponent = (function () {
    function TitleHoldersComponent(titleHolderService, router) {
        this.titleHolderService = titleHolderService;
        this.router = router;
    }
    TitleHoldersComponent.prototype.getTitleHolders = function () {
        var _this = this;
        this.titleHolderService.getTitleHolders()
            .then(function (titleHolders) { return _this.titleHolders = titleHolders; });
    };
    TitleHoldersComponent.prototype.ngOnInit = function () {
        this.getTitleHolders();
    };
    TitleHoldersComponent.prototype.gotoDetail = function (titleHolder) {
        var link = ['/detail', titleHolder.id];
        this.router.navigate(link);
    };
    TitleHoldersComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/title-holders.component.html',
            styleUrls: ['app/title-holders.component.css'],
            directives: [fighter_search_component_1.FighterSearchComponent]
        }), 
        __metadata('design:paramtypes', [title_holder_service_1.TitleHolderService, router_1.Router])
    ], TitleHoldersComponent);
    return TitleHoldersComponent;
}());
exports.TitleHoldersComponent = TitleHoldersComponent;
//# sourceMappingURL=title-holders.component.js.map