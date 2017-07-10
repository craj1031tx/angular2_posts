System.register(['angular2/core', 'angular2/common', './custom-validator', 'angular2/router', './user.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, custom_validator_1, router_1, user_service_1, user_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (custom_validator_1_1) {
                custom_validator_1 = custom_validator_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                function AddUserComponent(formBuilder, _userService, _router, _routeParams) {
                    this._userService = _userService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.newUserForm = formBuilder.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, custom_validator_1.CustomValidators.emailFormat])],
                        phone: ['', common_1.Validators.required],
                        address: formBuilder.group({
                            street: ['', common_1.Validators.required],
                            city: ['', common_1.Validators.required],
                            zipcode: ['', common_1.Validators.required]
                        })
                    });
                }
                AddUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.newUserForm.dirty) {
                        return confirm("You have unsaved data on your form! Please confirm before leaving.");
                    }
                };
                AddUserComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    if (id) {
                        this._userService.updateUser(this.newUserForm.value, id).subscribe(function (res) {
                            _this._router.navigate(['Users']);
                        });
                    }
                    else {
                        this._userService.addUser(this.newUserForm.value).subscribe(function (res) {
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                AddUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.editingOrNew = id ? "Edit User" : "New User";
                    if (!id) {
                        return;
                    }
                    this._userService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/add-user.component.html",
                        providers: [user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_1.Router, router_1.RouteParams])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=add-user.component.js.map