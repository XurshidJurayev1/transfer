import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { listTransfer } from './AdminReducers';


const rootReducer = combineReducers({
  listTransfer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));