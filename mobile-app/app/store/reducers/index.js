import { combineReducers } from 'redux';

import user from './user.reducer';
import light from './light.reducer'

export default combineReducers({ user, light });