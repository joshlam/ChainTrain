import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from 'src/store/reducer';
import { PricesState } from 'src/Prices/types';

interface ApplicationState {
  prices: PricesState;
}

const configureStore = (initialState: ApplicationState): ApplicationState => (
  createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
);

export default configureStore;
