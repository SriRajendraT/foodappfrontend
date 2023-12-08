import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/dataapi.service';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { ApiResponse } from '../models/ApiResponse-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup = new FormGroup({});
  constructor(private dataapi: DataApiService, private builder: FormBuilder) {}
  ngOnInit(): void {}

  inItForm() {
    this.recipeForm = this.builder.group({
      ID: [0],

      RECIPE_NAME: ['', [Validators.required]],
      DESCRIPTION: ['', [Validators.required]],
    });
  }

  addRecipe(request: ApiResponse<RecipeDetails>) {
    this.dataapi.addRecipe(request);
  }
}
