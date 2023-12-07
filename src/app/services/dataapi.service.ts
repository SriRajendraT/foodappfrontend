import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Recipe } from "../models/Recipe-model";
import { ApiResponse } from "../models/ApiResponse-model";
import { Injectable } from "@angular/core";
import { RecipeDetails } from "../models/RecipeDetails-model";

@Injectable({
    providedIn: 'root',
  })
export class DataApiService {

    apiUrl="https://localhost:7038/api/Food/";
    constructor(private http: HttpClient){}

    getRecipeList():Observable<ApiResponse<RecipeDetails[]>> {
        return this.http.post<ApiResponse<RecipeDetails[]>>(this.apiUrl+'GetRecipeList','');
    }

}