import { SET_RESULTS } from './actions';


/**
 * Action handlers
 */
const ACTION_HANDLERS = {
  [SET_RESULTS]: (state, action) => (
    {
      ...state,
      results: action.value,
    }
  ),
};


/**
 * Reducers
 */
const initialState = {
  results: [],
};

export const shopeperReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
