import { Ingredient } from "./Ingredient-model";
import { Recipe } from "./Recipe-model";

export class RecipeDetails extends Recipe {
    // recipe_image!:RecipeImage;
    Image!:string;  
    TotalIngredients!:number;
    Ingredients:Ingredient[]=[];
}