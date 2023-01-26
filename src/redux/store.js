import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
 import { TodoReducers } from "./reducers/TodoReducers";

const reducer = combineReducers({
  Todo:TodoReducers,
});

const initialState= {}

const middleware =[thunk];

  const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
