import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { DataApiService } from './services/dataapi.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecipeTableListComponent } from './home/recipe-table-list/recipe-table-list.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IngredientspartialvieweComponent } from './ingredientspartialviewe/ingredientspartialviewe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FavouriteComponent,
    RecipeTableListComponent,
    ViewRecipeComponent,
    AddRecipeComponent,
    IngredientspartialvieweComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
