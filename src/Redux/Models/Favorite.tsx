export type FavoriteState = {
  favorites: number[];
};

export type FavoriteAction = {
  type: string;
  favorite: number;
};

export type DispatchType = (args: FavoriteAction) => FavoriteAction;
