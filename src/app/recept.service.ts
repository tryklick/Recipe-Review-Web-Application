import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://www-th-frontend.azurewebsites.net/api/exam/v1/recipe';
  private ratingUrl = `${this.apiUrl}/rating`;

  constructor(private http: HttpClient) {}

  // Funktion för att hämta alla recept
  // Returnerar en Observable med recept-data
  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Funktion för att hämta ett recept baserat på id
  // Returnerar en Observable med recept-data
  getRecipeById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  // Funktion för att skicka in en ny rating för ett recept
  // Tar emot receptets id och rating-värdet som argument
  // Returnerar en Observable med det nya genomsnittliga betyget
  submitRating(recipeId: number, rating: number): Observable<any> {
    const ratingData = { recipeId, rating };
    return this.http.post<any>(this.ratingUrl, ratingData);
  }
}
