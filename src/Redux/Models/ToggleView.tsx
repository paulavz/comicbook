export type ToggleViewState = {
    isGrid: boolean;
  };
  
  export type ToggleViewAction = {
    type: string;
    isGrid: boolean;
  };
  
  export type DispatchType = (args: ToggleViewAction) => ToggleViewAction;
  