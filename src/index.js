import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./components/reducers/index";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? (a) => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
