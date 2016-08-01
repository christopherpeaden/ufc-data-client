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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var FighterService = (function () {
    function FighterService(http) {
        this.http = http;
        this.fightersUrl = 'http://protected-fjord-16041.herokuapp.com/fighters';
    }
    FighterService.prototype.getFighters = function () {
        return this.http.get(this.fightersUrl)
            .toPromise()
            .then(function (fighters) { return fighters.json(); })
            .catch(this.handleError);
    };
    FighterService.prototype.getFighter = function (id) {
        return this.getFighters()
            .then(function (fighters) { return fighters.find(function (fighter) { return fighter.id === id; }); });
    };
    FighterService.prototype.post = function (fighter) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.fightersUrl, JSON.stringify(fighter), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FighterService.prototype.put = function (fighter) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.fightersUrl + "/" + fighter.id;
        return this.http
            .put(url, JSON.stringify(fighter), { headers: headers })
            .toPromise()
            .then(function () { return fighter; })
            .catch(this.handleError);
    };
    FighterService.prototype.delete = function (fighter) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.fightersUrl + "/" + fighter.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    FighterService.prototype.save = function (fighter) {
        if (fighter.id) {
            return this.put(fighter);
        }
        return this.post(fighter);
    };
    FighterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    FighterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FighterService);
    return FighterService;
}());
exports.FighterService = FighterService;
//# sourceMappingURL=fighter.service.js.map