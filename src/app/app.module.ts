import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlingComponent } from './top-headling/top-headling.component';
import{HttpClientModule} from '@angular/common/http' ;
import { ApiServiceService } from './service/api-service.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { ScienceComponent } from './science/science.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { EntertainmentNewComponent } from './entertainment-new/entertainment-new.component';
import { HealthNewsComponent } from './health-news/health-news.component';
@NgModule({
  declarations: [AppComponent, TopHeadlingComponent, TechNewsComponent, ScienceComponent, BusinessNewsComponent, SportNewsComponent, EntertainmentNewComponent, HealthNewsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
