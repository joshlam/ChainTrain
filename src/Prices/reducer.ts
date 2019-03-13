import actionTypes from './action-types';
import { Currency, PricesState } from './types';

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
    case actionTypes.TOGGLE_CAPSULE:
      return {
        ...state,
        currencies: state.currencies.reduce(
          (currencies: Currency[], currency: Currency): Currency[] => {
            if (currency.symbol === action.symbol) {
              currencies.push({
                ...currency,
                active: !currency.active
              });
            } else {
              currencies.push(currency);
            }

            return currencies;
          }, []
        )
      };
    case actionTypes.FETCH_TRADES_SUCCESS:
      return {
        ...state,
        currencies: state.currencies.reduce(
          (currencies: Currency[], currency: Currency): Currency[] => {
            if (currency.pair === action.pair) {
              currencies.push({
                ...currency,
                trades: action.json
              });
            } else {
              currencies.push(currency);
            }

            return currencies;
          }, []
        )
      };
    default:
      return state;
  }
};

export default reducer;
