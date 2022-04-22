import { ADD_URL_COMIC } from "../Actions/types";
import { ComicAction, ComicState } from "../Models/Comic";

// Define an initial state
const initialState: ComicState = {
  comic:{
    title:"",
    id:0,
    url:"",
  }
}
const ComicReducers = (
  state: ComicState = initialState,
  action: ComicAction
): ComicState => {
  switch (action.type) {
    case ADD_URL_COMIC:
      return {
        comic:action.comic
      }
  }
  return state;
};

export default ComicReducers;
