import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { CustomValidators } from './custom-validator';

@Component({
    templateUrl: "app/add-user.component.html" 
})

export class AddUserComponent{
    newUserForm: ControlGroup;


    constructor(formBuilder: FormBuilder){
        this.newUserForm = formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, CustomValidators.emailFormat])],
            phone: ['', Validators.required],
            address: formBuilder.group({
                street: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required]
            })
        })
    }

}