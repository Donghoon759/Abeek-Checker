import { combineReducers } from 'redux';
import semester from '../store/semester';
import subject from '../store/subject';

const rootReducer = combineReducers({
  semester,
  subject,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
