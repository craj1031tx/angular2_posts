import { Component, OnInit } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { CustomValidators } from './custom-validator';
import { Router, CanDeactivate, ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    templateUrl: "app/add-user.component.html",
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class AddUserComponent implements CanDeactivate, OnInit{
    newUserForm: ControlGroup;
    editingOrNew: string;
    user = new User();


    constructor(
        formBuilder: FormBuilder, 
        private _userService: UserService, 
        private _router: Router,
        private _routeParams: RouteParams
        ){

        this.newUserForm = formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, CustomValidators.emailFormat])],
            phone: ['', Validators.required],
            address: formBuilder.group({
                street: ['', Validators.required],
                city: ['', Validators.required],
                zipcode: ['', Validators.required]
            })
        })
    }

    routerCanDeactivate(next, previous){
        if(this.newUserForm.dirty){
            return confirm("You have unsaved data on your form! Please confirm before leaving.")
        }
    }

    onSubmit(){
        var id = this._routeParams.get("id");

        if(id){
            this._userService.updateUser(this.newUserForm.value, id).subscribe(res => {
                this._router.navigate(['Users']);
            })
        }
        else{
            this._userService.addUser(this.newUserForm.value).subscribe(res => {
                this._router.navigate(['Users']);
            });
        }

        
    }

    ngOnInit(){
        var id = this._routeParams.get("id");
        
        this.editingOrNew = id ? "Edit User" : "New User";

        if(!id){
            return;
        }

        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound'])
                    }
                }
            )

    }

}