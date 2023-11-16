import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css'],
})
export class SportNewsComponent implements OnInit {
  constructor(private _service: ApiServiceService) {}
  sportNewDispaly: any = [];
  ngOnInit(): void {
    this._service.sportsNews().subscribe((result) => {
      console.log(result);
      this.sportNewDispaly = result.articles;
    });
  }
}
