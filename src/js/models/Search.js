import axios from 'axios';
import {apiKey, proxy} from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`)
      this.result = result.data.recipes;
      // console.log(this.result);
    } catch (error) {
      console.log(error)
    }
  }
}
