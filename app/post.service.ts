import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){   
    }

    getPosts(id?){
        if(id){
            return this._http.get(this._url+"?userId="+id).map(res => res.json());
        }
        return this._http.get(this._url).map(res => res.json());
    }

    getComments(id){
        return this._http.get(this._url+"/"+id+"/comments").map(res => res.json());
    }


}