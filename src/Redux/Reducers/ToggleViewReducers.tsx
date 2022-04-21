import { TOGGLE_GRID } from "../Actions/types";
import { ToggleViewAction, ToggleViewState } from "../Models/ToggleView";

// Define an initial state
const initialState: ToggleViewState = {
  isGrid:true
}
const ToggleViewReducers = (
  state: ToggleViewState = initialState,
  action: ToggleViewAction
): ToggleViewState => {
  switch (action.type) {
    case TOGGLE_GRID:
      return {
        isGrid:action.isGrid
      }
  }
  return state;
};

export default ToggleViewReducers;
