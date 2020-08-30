import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {StorageServiceModule} from 'ngx-webstorage-service';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileQuestionComponent } from './user-profile-question/user-profile-question.component';
import { CricketerQuestionComponent } from './cricketer-question/cricketer-question.component';
import { FlagQuestionComponent } from './flag-question/flag-question.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';


const app : Routes = [{path:'',component:LandingPageComponent},{path:'landingPage',component:LandingPageComponent},{path:'userProfile',component:UserProfileQuestionComponent},{path:'cricketerQue',component:CricketerQuestionComponent},{path:'flagQue',component:FlagQuestionComponent},{path:'finalPage',component:FinalPageComponent},{path:'historyPage',component:HistoryPageComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserProfileQuestionComponent,
    CricketerQuestionComponent,
    FlagQuestionComponent,
    FinalPageComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(app),
    ReactiveFormsModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
