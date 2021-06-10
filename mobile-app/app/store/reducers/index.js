import { combineReducers } from 'redux';

import user from './user.reducer';
import veges from './vegetables.reducer';
import gardent from './gardent.reducer'

export default combineReducers({ user, veges, gardent });