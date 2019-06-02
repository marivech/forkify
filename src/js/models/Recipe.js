import axios from 'axios';
import {apiKey, proxy} from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${apiKey}&rId=${this.id}`);
      this.title = res.data.recipe.title;
      this.image = res.data.recipe.image_url;
      this.author = res.data.recipe.publisher;
      this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
      console.log(error)
    }
  }

  calcTime() {
    // 15 minutes for each 3 ingredients
    const numIngredients = this.ingredients.length;
    this.time = Math.ceil(numIngredients / 3 * 15);
  }

  calcServings() {
    this.servings = 4;
  }
}