import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITE } from "./types"

export function addFavorite(favorite: number) {
    return {
      type: ADD_FAVORITE ,
      favorite,
    }
}
  
  export function removeFavorite(favorite: number) {
    return {
      type: REMOVE_FAVORITE,
      favorite,
    }
  }

  export function toggleFavorite(favorite: number) {
    return {
      type: TOGGLE_FAVORITE,
      favorite,
    }
  }