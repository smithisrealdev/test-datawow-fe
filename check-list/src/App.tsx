import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/redux-store/index";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";
import React from "react";
import { apiMiddleware } from "redux-api-middleware";
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...[ReduxThunk, ReduxLogger, apiMiddleware])
);

import Layout from "./components/Layouts/Layout";
const mainStyle = {
  backgroundColor: "#E5E5E5",
  padding: "42px 280px",
  height: "100vh",
  width: "100vw",
};

function App() {
  return (
    <Provider store={store}>
      <div style={mainStyle}>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
