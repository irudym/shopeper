export const START_SEARCH = 'START_SEARCH';
export const SET_RESULTS = 'SET_RESULTS';

export const startSearch = string => (
  {
    type: START_SEARCH,
    value: string,
  }
);

export const setResults = results => (
  {
    type: SET_RESULTS,
    value: results,
  }
);
