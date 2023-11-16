import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {
  constructor(private _service: ApiServiceService) {}
  businessNewDispaly: any = [];
  ngOnInit(): void {
    this._service.businessNews().subscribe((result) => {
      console.log(result);
      this.businessNewDispaly = result.articles;
    });
  }
}
