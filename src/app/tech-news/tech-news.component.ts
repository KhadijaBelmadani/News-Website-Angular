import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private _service:ApiServiceService){}
  techNewDispaly:any=[];
  ngOnInit():void{
     this._service.techNews().subscribe((result) => {
       console.log(result);
       this.techNewDispaly = result.articles;
     });
  }
}
