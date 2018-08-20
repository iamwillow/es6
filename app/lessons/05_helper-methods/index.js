import mapping from './1_map.js';
import filters from './2_filters.js';
import repeat from './3_repeat.js';
import searchStrings from './4_search.js';
import numbers from './5_numbers.js';

const helperMethods = () => {
  mapping();
  filters();
  repeat();
  searchStrings();
  numbers();
}

export default helperMethods;

