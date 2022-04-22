export type IComic = {
  url:string;
  id:number;
  title:string;
}

export type ComicState = {
    comic: IComic;
  };
  
  export type ComicAction = {
    type: string;
    comic: IComic;
  };
  
  export type DispatchType = (args: ComicAction) => ComicAction;
  