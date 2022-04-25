import { TOGGLE_GRID } from "./types";

export function toggleGridState(isGrid: boolean) {
    return {
      type: TOGGLE_GRID ,
      isGrid,
    }
}
  