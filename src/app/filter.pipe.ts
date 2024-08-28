import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(recipes: any[], filterBy: string): any {
    if(!recipes || !filterBy){
        return recipes;
    }
     return recipes.filter((item)=> item.name.toLowerCase().includes(filterBy.toLowerCase()))
  }

}
