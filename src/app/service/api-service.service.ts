import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=af5a6739c3634ed6a46434acfd181674';

  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=af5a6739c3634ed6a46434acfd181674';

  scienceApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=af5a6739c3634ed6a46434acfd181674';

  businessApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af5a6739c3634ed6a46434acfd181674';

  sportApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=af5a6739c3634ed6a46434acfd181674';

  entertainmentApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=af5a6739c3634ed6a46434acfd181674';

  healthApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=af5a6739c3634ed6a46434acfd181674';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  scienceNews(): Observable<any> {
    return this._http.get(this.scienceApiUrl);
  }
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
  sportsNews(): Observable<any> {
    return this._http.get(this.sportApiUrl);
  }
  entertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }
  healthNews(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
}
