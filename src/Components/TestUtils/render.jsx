import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import FavoriteReducers from "../../Redux/Reducers/FavoriteReducers";
import ComicReducers from "../../Redux/Reducers/ComicReducers";
import ToggleViewReducers from "../../Redux/Reducers/ToggleViewReducers";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        favorite: FavoriteReducers,
        comic: ComicReducers,
        view: ToggleViewReducers,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
