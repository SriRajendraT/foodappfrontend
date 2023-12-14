import { BaseClass } from "./BaseClass-model";

export class Recipe extends BaseClass {
    RECIPE_NAME!:string;
    USER_ID!:number;
    DESCRIPTION:string='';
    FAVOURITES!:string;
    RECIPE_TYPE_ID!:number;
    IMAGE_ID!:string;
}