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
var title_holder_service_1 = require('./title-holder.service');
require('./rxjs-extensions');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Fighters';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ufc-statistics',
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['/title-holders']\" routerLinkActive=\"active\">Title Holders</a>\n      <a [routerLink]=\"['/fighters']\" routerLinkActive=\"active\">Fighters</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [fighter_service_1.FighterService, title_holder_service_1.TitleHolderService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map