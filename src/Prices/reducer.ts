import actionTypes from './action-types';
import { PricesState } from './types';

const initialState = Object.freeze({ currencies: [], fetched: false });

const reducer = (state: PricesState = initialState, action): PricesState => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        currencies: action.json,
        fetched: true
      };
    case actionTypes.FETCH_ERROR:
      return { ...state, fetched: true };
    default:
      return state;
  }
};

export default reducer;
