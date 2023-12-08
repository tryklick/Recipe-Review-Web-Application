import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recept.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = []; // array som kommer att fyllas med recept från API:et
  showMainIngredients: { [key: string]: boolean } = {}; // objekt för att hålla koll på vilka ingredienser som ska visas
  
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(): void {
  this.recipeService.getRecipes().subscribe((data: any) => { // hämtar recept från API:et när komponenten laddas
  this.recipes = data; // sparar recepten i recipes-arrayen
  });
  }
  
  toggleMainIngredients(id: string): void { // funktion som kallas när man klickar på en "Visa huvudingredienser"-knapp
  this.showMainIngredients[id] = !this.showMainIngredients[id]; // växlar värdet för den aktuella ingrediensen mellan true och false
  }
  }
