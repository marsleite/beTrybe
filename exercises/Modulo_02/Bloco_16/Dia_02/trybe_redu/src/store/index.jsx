import { createStore } from 'redux';
import rootReducer from '../reducers'

// create a store
const store = createStore(rootReducer);

export default store;