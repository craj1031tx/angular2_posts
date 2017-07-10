import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    private _url = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){
    }

    getUsers() {
        return this._http.get(this._url).map(res => res.json());
    }

    getUser(id) {
        return this._http.get(this._url + "/" + id).map(res => res.json());
    }

    addUser(userData) {
        return this._http.post(this._url, JSON.stringify(userData)).map(res => res.json());
    }

    updateUser(userData, id){
        return this._http.put(this._url + "/" + id, JSON.stringify(userData)).map(res => res.json());
    }

    deleteUser(id){
        return this._http.delete(this._url + "/" + id).map(res => res.json());
    }
}