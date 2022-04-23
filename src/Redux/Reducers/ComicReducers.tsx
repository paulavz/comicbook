import { ADD_URL_COMIC } from "../Actions/types";
import { ComicAction, ComicState } from "../Models/Comic";

const comicStorage = localStorage.getItem("comic");
// Define an initial state
const initialState: ComicState = {
  comic:
    comicStorage === null
      ? {
          title: "",
          id: 0,
          url: "",
        }
      : JSON.parse(comicStorage),
};
const ComicReducers = (
  state: ComicState = initialState,
  action: ComicAction
): ComicState => {
  switch (action.type) {
    case ADD_URL_COMIC:
      localStorage.setItem("comic", JSON.stringify(action.comic));
      return {
        comic: action.comic,
      };
  }
  return state;
};

export default ComicReducers;
