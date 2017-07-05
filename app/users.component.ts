import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from './user.service';

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>
        <a [routerLink]="['AddUser']" class="btn btn-primary">Add user</a>
        <table class="table table-bordered">
        <thead>
 		    <tr>
    			<th>Name</th>
    			<th>Email</th>
    			<th>Edit</th>
    			<th>Delete</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr *ngFor="#user of users">
    			<td>{{ user.name }}</td>
    			<td>{{ user.email }}</td>
    			<td><i class="glyphicon glyphicon-edit"></i></td>
                <td><i class="glyphicon glyphicon-remove"></i></td>
    		</tr>
    	</tbody>
        </table>
    `,
    providers: [HTTP_PROVIDERS, UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit{   
    users;

    constructor(private _usersService: UserService){}

    ngOnInit(){
        this._usersService.getUsers().subscribe(res => this.users = res);
    }
}