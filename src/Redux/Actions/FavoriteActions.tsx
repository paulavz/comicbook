import { TOGGLE_FAVORITE } from "./types";

export function toggleFavorite(favorite: number) {
  return {
    type: TOGGLE_FAVORITE,
    favorite,
  };
}
