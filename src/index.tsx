import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./Redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
