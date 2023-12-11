import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.inItForm();
  // }
 
  count:number=0;

  ngOnInit(): void {
    this.inItForm();
  }
  
  @Input() ingredints: Ingredient[] = [];
  @Output() updatedIng = new EventEmitter<Ingredient[] | null>();

  ingredientsForm: FormGroup = new FormGroup({

  });

  inItForm() {

    this.ingredientsForm = this.builder.group({
      
    });
    // console.log('inItForm '+this.count);
    
    // for (let i = 0; i < this.count; i++) {
      
    //   break;
    // }
  }

  addInput(){
    let vname = new Ingredient();
      // vname.INGREDIENT_NAME = 'Rj' + i;
      // vname.QUANTITY = i + 'kg';
      this.ingredints.push(vname);
    // console.log('add input '+this.count);
    
  }
  removeInput(){
    // let vname = new Ingredient();
      // vname.INGREDIENT_NAME = 'Rj' + i;
      // vname.QUANTITY = i + 'kg';
      this.ingredints.pop();
    // console.log('remove input '+this.count);
    
  }
}
