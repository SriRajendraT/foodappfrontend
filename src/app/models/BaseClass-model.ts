import { Time } from "@angular/common";

export class BaseClass {
    ID!:number;
    CREATED_DATE!:Date;
    UPDATE_DATE!:Date;
    CREATED_TIME!:Time;
    UPDATE_TIME!:Time;
    CREATED_USER!:string;
    UPDATED_USER!:string;
    DELETE_FLAG!:string;
    ACTIVE!:string;
}