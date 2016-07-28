"use strict";
var router_1 = require('@angular/router');
var title_holders_component_1 = require('./title-holders.component');
var fighters_component_1 = require('./fighters.component');
var fighter_detail_component_1 = require('./fighter-detail.component');
exports.routes = [
    { path: 'title-holders', component: title_holders_component_1.TitleHoldersComponent },
    { path: 'fighters', component: fighters_component_1.FightersComponent },
    { path: 'detail/:id', component: fighter_detail_component_1.FighterDetailComponent },
    { path: '', redirectTo: '/title-holders' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map