import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, finalize, map, throwError } from "rxjs";
import { Recipe } from "../models/Recipe-model";
import { ApiResponse } from "../models/ApiResponse-model";
import { Injectable } from "@angular/core";
import { RecipeDetails } from "../models/RecipeDetails-model";
import { KeyValues } from "../models/KeyValues-model";

@Injectable({
    providedIn: 'root',
  })
export class DataApiService {

    apiUrl="https://localhost:7038/api/Food/";
    constructor(private http: HttpClient){}

  getRecipeList():Observable<ApiResponse<RecipeDetails[]>> {
        let res=  this.http.post<ApiResponse<RecipeDetails[]>>(this.apiUrl+'GetRecipeList','');
        return res.pipe(
            map((r)=>{
                return r;
            }),
            finalize(()=>{
            }),
            catchError((err:HttpErrorResponse)=>{
                return this.handleError(err);
            })
        )
    }

    changeFav(kv:KeyValues):Observable<ApiResponse<boolean>>{
       return this.http.post<ApiResponse<boolean>>(this.apiUrl+'ChangeFav',kv);
    }

    private handleError(err:HttpErrorResponse):Observable<never>{
        
            console.log(err);
            return throwError(err.error)
        
    }
}