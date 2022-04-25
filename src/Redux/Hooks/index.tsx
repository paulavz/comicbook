import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StoreState, StoreDispatch } from './../index';

export const useAppDispatch = () => useDispatch<StoreDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;