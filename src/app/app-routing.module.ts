import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'view',component:ViewRecipeComponent},
  {path:'addRecipe',component:AddRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
