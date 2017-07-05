import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/navbar.component.html',
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    constructor(private _router: Router){}
    
    getCurrentRoute(route){
        var currentRoute = this._router.generate(route);
        return this._router.isRouteActive(currentRoute);
    }
}