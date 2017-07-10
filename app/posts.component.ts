import { Component, OnInit, OnChanges } from 'angular2/core';

import { PostService } from './post.service';
import { UserService } from './user.service';
import { SpinnerComponent } from './spinner.component';
import { PaginationComponent } from './pagination.component';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts.component.html',
    providers: [PostService, UserService],
    directives: [SpinnerComponent, PaginationComponent],
    styles: [
        ".thumbnail-rounded {border-radius: 100%;}", 
        ".posts li:hover {background: #ecf0f1;}", 
        ".posts li {cursor: default;}"        
        ]

})

export class PostsComponent implements OnInit, OnChanges{
    posts = [];
    users;
    loadingPosts = true;
    loadingComments = true;
    singleDisplay;
    comments;
    postsPerPage = 10;
    postsToDisplay = [];
    display


    constructor(
        private _postService: PostService, 
        private _userService: UserService){
    }

    ngOnInit(){
        this.retrievePosts();
        this._userService.getUsers().subscribe(res => this.users = res);
    }

    ngOnChanges(){
        // console.log("!!!!!!!!!!!!!!!!!", this.postsToDisplay)
    }

    retrievePosts(id?){
        this._postService.getPosts(id).subscribe(res => {
            this.posts = res;
            this.setNewPosts(1);
        },
        null,
        () => this.loadingPosts = false);
    }

    displayPost(post){
        this.singleDisplay = post;
        this._postService.getComments(post.id).subscribe(res => {
            this.comments = res
            this.loadingComments = false;
        })
    }

    getUserPosts(id){
        this.loadingPosts = true;
        this.singleDisplay = null;
        this.postsToDisplay = null;

        if(id==0){
            this.retrievePosts();
        }
        else{
            this.retrievePosts(id);
        }
    }

    setNewPage(event){
        console.log(event);
        this.setNewPosts(event);
    }

    setNewPosts(page){
        this.postsToDisplay = [];
        for(var i=((page*10)-10)); i<(page*10); i++){
            if(this.posts[i]){
                this.postsToDisplay.push(this.posts[i])                
            }
        }
    }
}