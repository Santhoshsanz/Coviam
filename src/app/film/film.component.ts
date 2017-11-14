import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IndexService} from './../index.service';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
filmNum:number;
films:any;
  constructor(private _Activatedroute:ActivatedRoute,private indexService:IndexService) { }

  ngOnInit() {
    this.filmNum = this._Activatedroute.snapshot.params.filmNum;
this.getFilmDetails(this.filmNum);
  }
  getFilmDetails(filmNum){
this.indexService.getFilmById(filmNum).subscribe(res=>{
  this.films=[];
  this.films.push(res);
  console.log(this.films)
})
  }

}
