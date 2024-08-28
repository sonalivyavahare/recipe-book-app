import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FilterPipe } from '../filter.pipe';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [FilterPipe, HeaderComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {

    @Input() searchTerm: string = '';
    recipes:any = [];
    latestRecipe:any;
    
    constructor(private rs:RecipeService){
        //this.recipes = this.recipes.slice().reverse(); 
        
    }

    ngOnInit(): void {
        this.getData();
        
    }

    async getData(){
        this.recipes = await this.rs.getData().then((res)=>res.json()).then((data)=>this.recipes = data)
        this.latestRecipe = this.recipes[this.recipes.length-1]
    }

    
    



}
