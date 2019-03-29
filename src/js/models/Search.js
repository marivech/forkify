import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const apiKey = 'a1416061ec7b95953aa17dc61950befa';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try {
      const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`)
      this.result = result.data.recipes;
      // console.log(this.result);
    } catch (error) {
      console.log(error)
    }
  }
}
