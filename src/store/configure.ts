import { createStore } from 'redux';

import reducer from 'src/store/reducer';

const configureStore = initialState => createStore(reducer, initialState);

export default configureStore;
