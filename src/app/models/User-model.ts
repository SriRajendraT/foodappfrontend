import { Time } from "@angular/common";
import { BaseClass } from "./BaseClass-model";

export class User extends BaseClass {
    FIRSTNAME!:string;
    LASTNAME!:string;
    USERNAME!:string;
    EMAIL!:string;
    PASSWORD!:string;
    LAST_PASSWORD!:string;
    OTP!:number;
    OTP_DATE!:Date;
    OTP_TIME!:Time;
    INGREDIENT_ID!:number;
}