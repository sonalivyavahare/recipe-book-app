import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  async getData(){
    let data = await fetch("http://localhost:3000/recipes");
    return data;
  }
}
