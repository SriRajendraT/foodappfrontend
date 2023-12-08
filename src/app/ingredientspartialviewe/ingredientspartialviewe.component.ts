import { Component } from '@angular/core';
import { Ingredient } from '../models/Ingredient-model';

@Component({
  selector: 'app-ingredientspartialviewe',
  templateUrl: './ingredientspartialviewe.component.html',
  styleUrls: ['./ingredientspartialviewe.component.css']
})
export class IngredientspartialvieweComponent {
ingridents:Ingredient[]=[];

}
