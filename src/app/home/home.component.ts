import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe-model';
import { DataApiService } from '../services/dataapi.service';
import { ApiResponse } from '../models/ApiResponse-model';
import { RecipeDetails } from '../models/RecipeDetails-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipies: RecipeDetails[] = [];

  constructor(private dataapi: DataApiService) {}
  ngOnInit(): void {
    console.log('Home Component');

    this.getRecipesList();
  }

  getRecipesList() {
    this.dataapi.getRecipeList().subscribe((result: ApiResponse<RecipeDetails[]>) => {
      if (result) {
        this.recipies = result.Result;
      }
    });
  }
}
