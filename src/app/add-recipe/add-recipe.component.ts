import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataApiService } from '../services/dataapi.service';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { ApiResponse } from '../models/ApiResponse-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../models/Ingredient-model';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage-services/storage.service';
import { KeyValues } from '../models/KeyValues-model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  ingredientsArry:Ingredient[]=[];
  recipeForm: FormGroup = new FormGroup({});
  constructor(
    private dataapi: DataApiService,
    private builder: FormBuilder,
    private router: Router,
    private storage:StorageService,
  ) {}
  ngOnInit(): void {
    this.inItForm();
    this.onEdit();
  }

  inItForm() {
    this.recipeForm = this.builder.group({
      ID: [0],
      RECIPE_NAME: ['', [Validators.required]],
      DESCRIPTION: ['', [Validators.required]],

    });
  }

  addRecipe() {
    let recipeSave = this.recipeForm.value as RecipeDetails;
    recipeSave.Ingredients=this.ingredientsArry
    if(recipeSave.ID>0){
      this.dataapi.addRecipe(recipeSave).subscribe((result: ApiResponse<boolean>) => {
        debugger;
        if (result) {
          this.router.navigate(['/']);
        }
      });
    }else{
      this.dataapi
      .addRecipe(recipeSave)
      .subscribe((result: ApiResponse<boolean>) => {
        if (result) {
          this.router.navigate(['/']);
        }
      });
    }
    
  }
  updateIngredients(data: any) {
    console.log(data);
    this.ingredientsArry!=data.value;
  }

  onEdit(){
    let id=this.storage.get('recipeById');
    let kv =new KeyValues();
    if(id){
      let res=JSON.parse(id);
      kv.value=res;
      this.dataapi.getReceipeById(kv).subscribe((result:ApiResponse<RecipeDetails>)=>{
        if(result){
          console.log(result.Result);
          this.ingredientsArry=result.Result.Ingredients;
          this.recipeForm.patchValue(result.Result);
        }
      });
    }
  }
}
