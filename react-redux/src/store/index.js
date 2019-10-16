import {createStore} from 'redux';
//reducer é chamado de forma automatica em alguns momentos pelo redux
//
import rootReducer from './reducers';

const store = createStore(rootReducer);
export default store;