import { combineReducers } from 'redux';
import data from '../store/data';

export interface StoreState {}

const rootReducer = combineReducers<StoreState>({
  data,
});

export default rootReducer;
