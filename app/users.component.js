System.register(['angular2/core', 'angular2/http', 'angular2/router', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    this._usersService = _usersService;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers().subscribe(function (res) { return _this.users = res; });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n        <h1>Users</h1>\n        <a [routerLink]=\"['AddUser']\" class=\"btn btn-primary\">Add user</a>\n        <table class=\"table table-bordered\">\n        <thead>\n \t\t    <tr>\n    \t\t\t<th>Name</th>\n    \t\t\t<th>Email</th>\n    \t\t\t<th>Edit</th>\n    \t\t\t<th>Delete</th>\n    \t\t</tr>\n    \t</thead>\n    \t<tbody>\n    \t\t<tr *ngFor=\"#user of users\">\n    \t\t\t<td>{{ user.name }}</td>\n    \t\t\t<td>{{ user.email }}</td>\n    \t\t\t<td><i class=\"glyphicon glyphicon-edit\"></i></td>\n                <td><i class=\"glyphicon glyphicon-remove\"></i></td>\n    \t\t</tr>\n    \t</tbody>\n        </table>\n    ",
                        providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map