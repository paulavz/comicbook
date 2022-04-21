import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITE,
} from "../Actions/types";
import { FavoriteAction, FavoriteState } from "../Models/IFavorite";

const initialState: FavoriteState = {
  favorites: [],
};

const FavoriteReducers = (
  state: FavoriteState = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case ADD_FAVORITE:
      let newFavorite: number[] = [];
      state.favorites.forEach((data) => {
        if (data === action.favorite) {
          newFavorite = state.favorites;
        }
      });
      if (newFavorite.length === 0) {
        newFavorite = state.favorites.concat(action.favorite);
      }
      return {
        favorites: newFavorite,
      };
    case REMOVE_FAVORITE:
      const updatedFavorites: number[] = state.favorites.filter(
        (favorite) => favorite !== action.favorite
      );
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case TOGGLE_FAVORITE:
      let favoriteNew: number[] = [];
      let isRepeat = false;
      state.favorites.forEach((data, i) => {
        if (data === action.favorite) {
          isRepeat = true;
        }
      });
      if (isRepeat) {
        favoriteNew = state.favorites.filter(
          (favorite) => favorite !== action.favorite
        );
      } else {
        favoriteNew = state.favorites.concat(action.favorite);
      }
      return {
        favorites: favoriteNew,
      };
  }
  return state;
};

export default FavoriteReducers;
