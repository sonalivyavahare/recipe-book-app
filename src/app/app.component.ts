import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RecipesComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'recipe-app';
    searchTerm: string = '';
    
}
