import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
  
@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe', 
      'This is simple a test', 
      'https://storage.needpix.com/rsynced_images/cornish-pasty-824131_1280.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another test recipe', 
      'This is simple a test', 
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Bacon%2C_ground_beef%2C_and_bean_chili.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  
  constructor(private slService: ShoppingListService) { }
}
