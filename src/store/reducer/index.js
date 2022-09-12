import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import revenueReducer from './revenue';

const rootReducer = combineReducers({
  user:loginReducer,
  revenue:revenueReducer
});

export default rootReducer;