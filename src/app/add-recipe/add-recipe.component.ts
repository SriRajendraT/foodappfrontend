import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataApiService } from '../services/dataapi.service';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { ApiResponse } from '../models/ApiResponse-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../models/Ingredient-model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  recipe:RecipeDetails|null=null;
  recipeForm: FormGroup = new FormGroup({});
  constructor(private dataapi: DataApiService, private builder: FormBuilder) {}
  ngOnInit(): void {
    this.inItForm();
  }

  inItForm() {
    this.recipeForm = this.builder.group({
      id: [0],
      recipe_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  // addRecipe(request: ApiResponse<RecipeDetails>) {
  //   this.dataapi.addRecipe(request);
  // }

  updateIngredients(data:any){
console.log(data);

  }
}
