import Search from './models/Search';
import { elements } from './views/base';
import * as searchView from './views/searchView'

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1. Get query from view
  const query = searchView.getInput();

  if (query) {
    // 2. New search object add to state

    state.search = new Search(query);
    // 3. Prepare UI to show the result
    searchView.clearInput();
    searchView.clearResults();

    // 4. Search for recipes
    await state.search.getResults();
    // 5. Render result on UI
    searchView.renderResults(state.search.result);
  }
}

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
