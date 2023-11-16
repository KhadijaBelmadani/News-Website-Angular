import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-top-headling',
  templateUrl: './top-headling.component.html',
  styleUrls: ['./top-headling.component.css']
})
export class TopHeadlingComponent implements OnInit  {


  constructor(private _services: ApiServiceService){}
  topHeadingDisplay:any=[];
  ngOnInit():void{
    this._services.topHeading().subscribe((result)=>{
      console.log(result)
      this.topHeadingDisplay=result.articles;
    })
  }
}
