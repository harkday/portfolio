
import { Component, Inject, OnInit } from '@angular/core';
import { userModel } from './Models/userModel';
import { UserService } from './_services/user.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akindelePortfolio';
  myParam?: string;
  apiUrl1?:string;
  name?:string;
  userInfo?:userModel;

  constructor( @Inject( "API_BASE_URL")apiUrl:string, public _userService?:UserService){
    this.apiUrl1 = apiUrl;
    this.name = this._userService?.name
  

  }


  handleEvent(para:string){
    this.myParam = para;
  }

  sendRequest(){
    
  }
  ngOnInit(): void {
    this._userService?.getUserData().subscribe((data:any)=>{
      this.userInfo ={firstName: data.data.firstName, lastName: data.data.lastName, workHistory: data.data.workHistory,
      email:data.data.email, phoneNumber:data.data.phoneNumber, address:data.data.address}
      console.log(data.data)
    }, (error:any)=>{console.log("error why")}, ()=>{console.log("weldon festus")});
  }

  }

