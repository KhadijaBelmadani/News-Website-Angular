import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  constructor(private _service: ApiServiceService) {}
  scienceNewsDispaly: any = [];
  ngOnInit(): void {
    this._service.scienceNews().subscribe((result) => {
      console.log(result);
      this.scienceNewsDispaly = result.articles;
    });
  }
}
