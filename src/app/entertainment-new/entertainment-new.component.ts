import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-entertainment-new',
  templateUrl: './entertainment-new.component.html',
  styleUrls: ['./entertainment-new.component.css'],
})
export class EntertainmentNewComponent implements OnInit {
  constructor(private _service: ApiServiceService) {}
  entertainmentNewsDispaly: any = [];
  ngOnInit(): void {
    this._service.entertainmentNews().subscribe((result) => {
      console.log(result);
      this.entertainmentNewsDispaly = result.articles;
    });
  }
}
