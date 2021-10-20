import { Inject, Injectable} from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable()
export class UserService{
    constructor(private _httpClient:HttpClient, @Inject("API_BASE_URL") private apiBaseUrl:string){}
    public name="Akindele";

    getUserData(){
        var headers = new HttpHeaders({apiKey: "94b701d7-c324-45ee-8f0f-42c373d28067"})
       // let apiUrl = this.apiBaseUrl;
        return this._httpClient.get(this.apiBaseUrl + "portfolio", {headers:headers})
    }

}