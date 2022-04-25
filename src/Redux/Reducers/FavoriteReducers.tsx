import {
  TOGGLE_FAVORITE,
} from "../Actions/types";
import { FavoriteAction, FavoriteState } from "../Models/Favorite";

const favoriteStorage = localStorage.getItem('favorite');

const initialState: FavoriteState = {
  favorites: (favoriteStorage === null) ? [] : JSON.parse(favoriteStorage),
};

const FavoriteReducers = (
  state: FavoriteState = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
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
      localStorage.setItem('favorite',JSON.stringify(favoriteNew))
      return {
        favorites: favoriteNew,
      };
  }
  return state;
};

export default FavoriteReducers;
