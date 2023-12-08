import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../services/dataapi.service';
import { RecipeDetails } from '../models/RecipeDetails-model';
import { ApiResponse } from '../models/ApiResponse-model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  favRecipies:RecipeDetails[]=[];
  constructor(private router:Router,private dataapi:DataApiService){}
  ngOnInit(): void {
  }

  getFav(){
    console.log('get fav');
    
   this.router.navigate(['/favourite']);
  }
}
