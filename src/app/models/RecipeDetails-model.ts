import { Ingredient } from "./Ingredient-model";
import { Recipe } from "./Recipe-model";
import { RecipeImage } from "./RecipeImage-model";

export class RecipeDetails extends Recipe {
    recipe_image!:RecipeImage;
    TotalIngredients!:number;
    Ingredients:Ingredient[]=[];    
}