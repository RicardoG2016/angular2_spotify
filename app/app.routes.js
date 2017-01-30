"use strict";
var router_1 = require('@angular/router');
var Searchcomponent_1 = require('./components/search/Searchcomponent');
var Aboutcomponent_1 = require('./components/about/Aboutcomponent');
var appRoutes = [
    {
        path: 'search',
        component: Searchcomponent_1.SearchComponent
    },
    {
        path: 'about',
        component: Aboutcomponent_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map