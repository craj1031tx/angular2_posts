import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from './user.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [HTTP_PROVIDERS, UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit{   
    users;

    constructor(private _usersService: UserService){}

    ngOnInit(){
        this._usersService.getUsers().subscribe(res => this.users = res);
    }

    deleteUser(id){
        if(confirm("Are you sure you want to delete the user with an ID of " + id)){
            this._usersService.deleteUser(id).subscribe(res => {
                this._usersService.getUsers().subscribe(res => {
                    this.users = res
                    console.log("this.users is now...", this.users);
                });
            })
        };        
    };
};