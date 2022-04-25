import { IComic } from "../Models/Comic";
import { ADD_URL_COMIC } from "./types";

export function addUrlComic(comic: IComic) {
    return {
      type: ADD_URL_COMIC ,
      comic,
    }
}
  