import { Component, OnInit } from '@angular/core';
import { IndexService} from './../index.service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
peoples :any;
  constructor(private indexService:IndexService, private router:Router) { }

  ngOnInit() {
    console.log("Init Index");
    this.renderAllPeople();
  }
  renderAllPeople(){
    console.log("Call Render");
    this.indexService.getAllPeople().subscribe(res=>{
    this.peoples=res.results;
    console.log(res.results);
      })
  }
  goToFilm(url:String){
    this.router.navigateByUrl("/films/"+url.substr(url.length-2,1));
  }

}
