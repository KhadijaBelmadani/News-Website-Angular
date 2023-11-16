import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css'],
})
export class HealthNewsComponent implements OnInit {
  constructor(private _service: ApiServiceService) {}
  healthNewsDispaly: any = [];
  ngOnInit(): void {
    this._service.healthNews().subscribe((result) => {
      console.log(result);
      this.healthNewsDispaly = result.articles;
    });
  }
}
