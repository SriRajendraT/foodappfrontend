import { Component, OnInit } from '@angular/core';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { DataApiService } from '../services/dataapi.service';
import { KeyValues } from '../models/KeyValues-model';
import { ApiResponse } from '../models/ApiResponse-model';
import { StorageService } from '../services/storage-services/storage.service';
import { Ingredient } from '../models/Ingredient-model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css'],
})
export class ViewRecipeComponent implements OnInit {
  constructor(
    private dataapi: DataApiService,
    private storage: StorageService
  ) {}
  ngOnInit(): void {
    this.getRecipeById();
  }
  recipe: RecipeDetails = new RecipeDetails();
  ingretients: Ingredient[] = [];
  steps: string[] = [];
  getRecipeById() {
    console.log('get by id');

    let kv = new KeyValues();
    let res = this.storage.get('recipeById');

    if (res) {
      let obj = parseInt(res);

      kv.value = obj;
      this.dataapi
        .getReceipeById(kv)
        .subscribe((result: ApiResponse<RecipeDetails>) => {
          if (result) {
            this.recipe = result.Result;
            this.ingretients = result.Result.Ingredients;
            this.steps = this.recipe.DESCRIPTION.split(/\r\n|\r|\n/);
            console.log(this.recipe.DESCRIPTION.split(/\r\n|\r|\n/));
            console.log(this.ingretients);
          }
        });
    }
  }
}
