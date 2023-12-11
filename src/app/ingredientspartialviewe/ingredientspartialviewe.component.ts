import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../models/Ingredient-model';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingredientspartialviewe',
  templateUrl: './ingredientspartialviewe.component.html',
  styleUrls: ['./ingredientspartialviewe.component.css'],
})
export class IngredientspartialvieweComponent implements OnInit {
  constructor(private builder: FormBuilder) {}
  ngOnInit(): void {
    this.inItForm();
  }
  @Input() ingredints: Ingredient[] = [];
  @Output() updatedIng = new EventEmitter<Ingredient[] | null>();

  ingredientsForm: FormGroup = new FormGroup({
    
  });
  inItForm() {
    this.ingredientsForm = this.builder.group({});
    // for (let i = 0; i <= 3; i++) {
    //   let vname = new Ingredient();
    //   vname.INGREDIENT_NAME = 'Rj' + i;
    //   vname.QUANTITY = i + 'kg';
    //   this.ingredints.push(vname);
    // }
  }
}
