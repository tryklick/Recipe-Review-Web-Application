import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recept.service';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any; // variable to hold the recipe data
  showMainIngredients = false; // boolean to toggle display of main ingredients
  showIngredients = true; // boolean to toggle display of all ingredients
  inputRating: number | null = null; // variable to hold the user's input rating, initially null

  constructor(
    private route: ActivatedRoute, // dependency injection for ActivatedRoute
    private recipeService: RecipeService // dependency injection for RecipeService
  ) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id'); // get the recipe ID from the URL
    if (recipeId) {
      this.recipeService.getRecipeById(recipeId) // call the getRecipeById method from RecipeService
        .subscribe((recipeData: any) => {
          this.recipe = recipeData; // set the recipe data to the returned data
        });
    }
  }

  toggleMainIngredients(): void { // function to toggle display of main ingredients
    this.showMainIngredients = !this.showMainIngredients;
  }

  submitRating(): void { // function to submit user's rating
    if (this.inputRating !== null) { // check if user has input a rating
      this.recipeService.submitRating(this.recipe.id, this.inputRating) // call the submitRating method from RecipeService
        .subscribe((newAverageRating: number) => {
          this.recipe.rating = newAverageRating; // set the recipe rating to the returned new average rating
        });
    }
  }
}
