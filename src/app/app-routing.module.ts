import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlingComponent } from './top-headling/top-headling.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { ScienceComponent } from './science/science.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { EntertainmentNewComponent } from './entertainment-new/entertainment-new.component';
import { HealthNewsComponent } from './health-news/health-news.component';

const routes: Routes = [
  { path: '', component: TopHeadlingComponent },
  { path: 'tech', component: TechNewsComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'business', component: BusinessNewsComponent },
  { path: 'sport', component: SportNewsComponent },
  { path: 'entertainment', component: EntertainmentNewComponent },
  { path: 'health', component: HealthNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
