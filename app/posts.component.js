System.register(['angular2/core', './post.service', './user.service', './spinner.component', './pagination.component'], function(exports_1, context_1) {
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
    var core_1, post_service_1, user_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.loadingPosts = true;
                    this.loadingComments = true;
                    this.postsPerPage = 10;
                    this.postsToDisplay = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.retrievePosts();
                    this._userService.getUsers().subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent.prototype.ngOnChanges = function () {
                    // console.log("!!!!!!!!!!!!!!!!!", this.postsToDisplay)
                };
                PostsComponent.prototype.retrievePosts = function (id) {
                    var _this = this;
                    this._postService.getPosts(id).subscribe(function (res) {
                        _this.posts = res;
                        _this.setNewPosts(1);
                    }, null, function () { return _this.loadingPosts = false; });
                };
                PostsComponent.prototype.displayPost = function (post) {
                    var _this = this;
                    this.singleDisplay = post;
                    this._postService.getComments(post.id).subscribe(function (res) {
                        _this.comments = res;
                        _this.loadingComments = false;
                    });
                };
                PostsComponent.prototype.getUserPosts = function (id) {
                    this.loadingPosts = true;
                    this.singleDisplay = null;
                    this.postsToDisplay = null;
                    if (id == 0) {
                        this.retrievePosts();
                    }
                    else {
                        this.retrievePosts(id);
                    }
                };
                PostsComponent.prototype.setNewPage = function (event) {
                    console.log(event);
                    this.setNewPosts(event);
                };
                PostsComponent.prototype.setNewPosts = function (page) {
                    this.postsToDisplay = [];
                    for (var i = ((page * 10) - 10); i < (page * 10); i++) {
                        if (this.posts[i]) {
                            this.postsToDisplay.push(this.posts[i]);
                        }
                    }
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/posts.component.html',
                        providers: [post_service_1.PostService, user_service_1.UserService],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        styles: [
                            ".thumbnail-rounded {border-radius: 100%;}",
                            ".posts li:hover {background: #ecf0f1;}",
                            ".posts li {cursor: default;}"
                        ]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map