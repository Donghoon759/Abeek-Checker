import { combineReducers } from 'redux';
import semester from '../store/semester';
import subject from '../store/subject';
import global from '../store/global';

const rootReducer = combineReducers({
  semester,
  subject,
  global,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
