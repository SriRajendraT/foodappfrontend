import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/ApiResponse-model';
import { KeyValues } from 'src/app/models/KeyValues-model';
import { RecipeDetails } from 'src/app/models/RecipeDetails-model';
import { DataApiService } from 'src/app/services/dataapi.service';
import { StorageService } from 'src/app/services/storage-services/storage.service';

@Component({
  selector: 'app-recipe-table-list',
  templateUrl: './recipe-table-list.component.html',
  styleUrls: ['./recipe-table-list.component.css'],
})
export class RecipeTableListComponent implements OnInit {
  recipies: RecipeDetails[] = [];
  @Input() flag: boolean = false;

  constructor(
    private dataapi: DataApiService,
    private storage: StorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('Home Component');
    if (!this.flag) {
      this.getRecipesList();
    } else {
      this.getFav();
    }
  }

  getRecipesList() {
    this.dataapi
      .getRecipeList()
      .subscribe((result: ApiResponse<RecipeDetails[]>) => {
        if (result) {
          this.recipies = result.Result;
          console.log(result.Result, 'Booran');
        }
      });
  }

  changeFav(id: number, click: boolean) {
    let kv = new KeyValues();
    kv.value = id;
    kv.key = click ? 'Y' : 'N';
    console.log('Change Fav');
    this.dataapi.changeFav(kv).subscribe((result: ApiResponse<boolean>) => {
      if (result.Success) {
        this.recipies = this.recipies.map((x) => {
          if (x.ID == id) x.FAVOURITES = click ? 'Y' : 'N';
          return x;
        });
      }
    });
  }

  getFav() {
    this.dataapi.getFav().subscribe((result: ApiResponse<RecipeDetails[]>) => {
      if (result) {
        this.recipies = result.Result;
      }
    });
  }

  onView(id: number) {
    this.storage.set('recipeById', JSON.stringify(id));
    this.router.navigate(['/view']);
  }

  onEdit(id:number){
    this.storage.set('recipeById', JSON.stringify(id));
    this.router.navigate(['/addRecipe']);
  }
  addRecipe(){
    this.router.navigate(['/addRecipe']);
  }
}
