import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import counterReducer from "../reducers/counterReducer";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
