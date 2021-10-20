import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './_services/user.services';
import {HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
  
  ],
  providers: [{provide: "API_BASE_URL", useValue:"https://sq009portfolio.herokuapp.com/api/v1/"}, 
  {provide:UserService, useClass:UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
