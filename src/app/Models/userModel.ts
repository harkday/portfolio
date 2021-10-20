import { workHistory } from "./workHistory";

export interface userModel{
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    address:string;
    workHistory:workHistory[];

}