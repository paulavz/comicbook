import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./Redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ComicDetails from "./Components/ComicDetails.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ComicDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
