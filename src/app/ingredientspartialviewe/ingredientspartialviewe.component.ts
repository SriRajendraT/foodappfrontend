import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ingredient } from '../models/Ingredient-model';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataApiService } from '../services/dataapi.service';
import { KeyValues } from '../models/KeyValues-model';
import { ApiResponse } from '../models/ApiResponse-model';

@Component({
  selector: 'app-ingredientspartialviewe',
  templateUrl: './ingredientspartialviewe.component.html',
  styleUrls: ['./ingredientspartialviewe.component.css'],
})
export class IngredientspartialvieweComponent implements OnInit {
  constructor(private builder: FormBuilder,private dataapi:DataApiService) {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.inItForm();
  // }
 
  btn:boolean=false;
  count:number=-1;
  ngOnInit(): void {
    this.inItForm();
  }
  
  @Input() ingredints: Ingredient[] = [];
  @Output() updatedIng = new EventEmitter<Ingredient[] | null>();

  ingredientsForm: FormGroup = new FormGroup({});

  inItForm() {

    this.ingredientsForm = this.builder.group({
      id:[0],
      ingredient_name:['',[Validators.required]],
      quantity:['',Validators.required],
      count:[0]
    });
    // console.log('inItForm '+this.count);
    
    // for (let i = 0; i < this.count; i++) {
      
    //   break;
    // }
  }

  addIngredients(){
    this.updatedIng.emit(this.ingredints);
  }
updateIng(id:number){
  debugger;
  this.ingredientsForm.patchValue(
    {
      id:this.ingredints[id].ID,
      ingredient_name:this.ingredints[id].INGREDIENT_NAME,
      quantity:this.ingredints[id].QUANTITY
    });
  this.count=id;
  this.btn = !this.btn
}
  addInput(){
    let ing = this.ingredientsForm.value;
    let vname = new Ingredient()
        vname.INGREDIENT_NAME = ing['ingredient_name'];
        vname.QUANTITY = ing['quantity'];
      if(this.count==-1){
        this.ingredientsForm.patchValue({id:0,ingredient_name:'',quantity:''})
        this.ingredints.push(vname)
      } 
      else{
        this.ingredints[this.count]=vname;
      }
      this.btn = !this.btn
      this.count=-1;
    
    // console.log('add input '+this.count);
    
    
  }
  removeInput(){
    // let vname = new Ingredient();
      // vname.INGREDIENT_NAME = 'Rj' + i;
      // vname.QUANTITY = i + 'kg';
      let ing=this.ingredientsForm.value as Ingredient;
      let kv=new KeyValues();
      if(ing.ID>0){
        kv.value=ing.ID;
        this.dataapi.deleteIngredientById(kv).subscribe((result:ApiResponse<boolean>)=>{
          if(result){
            this.ingredints.pop();
          }
        });
      }else{
        this.ingredints.pop();
      }
      
    // console.log('remove input '+this.count);
    
  }
}
