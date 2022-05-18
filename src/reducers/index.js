import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { listTransfer, error, role, token, user } from './AdminReducers';


const rootReducer = combineReducers({
  listTransfer, user, role, token, error,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));