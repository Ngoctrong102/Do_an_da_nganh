import { combineReducers } from 'redux';

import user from './user.reducer';
import light from './light.reducer'
import veges from './vegetables.reducer';

export default combineReducers({ user, light, veges });