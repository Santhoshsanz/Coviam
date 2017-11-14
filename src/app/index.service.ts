import { Injectable } from '@angular/core';
import {Http, Headers,Response,URLSearchParams,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class IndexService {
peopleUrl="https://swapi.co/api/people/";
filmUrl="https://swapi.co/api/films/"
  constructor(private http:Http) { }
  getAllPeople():Observable<any>{
    return this.http.get(this.peopleUrl)
    // ...and calling .json() on the response to return data
     .map((res:Response) => {
       return <any>res.json();
    })
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getFilmById(filmId:number):Observable<any>{
    return this.http.get(this.filmUrl+filmId+"/")
    // ...and calling .json() on the response to return data
     .map((res:Response) => {
       return <any>res.json();
    })
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
