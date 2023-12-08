import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from './recept-struktur/recipe-details.component';
import { RecipeListComponent } from './recept-lista/recipe-list.component';

const routes: Routes = [
  // Definiera vägarna (routes) och vilken komponent som ska visas för varje väg
  { path: '', component: RecipeListComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
];

@NgModule({
  // Importera de definierade vägarna och gör dem tillgängliga för resten av applikationen
  imports: [RouterModule.forRoot(routes)],
  // Exportera modulen så att den kan användas i andra delar av applikationen
  exports: [RouterModule]
})
// Definiera AppModule och alla dess beroenden (dependencies)
export class AppRoutingModule { }




