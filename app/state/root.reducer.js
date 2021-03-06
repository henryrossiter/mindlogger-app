import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import app from './app/app.reducer';
import applets from './applets/applets.reducer';
import responses from './responses/responses.reducer';
import user from './user/user.reducer';
import fcm from './fcm/fcm.reducer';
import media from './media/media.reducer';
import geolocation from './geolocation/geolocation.reducer';
import covid from './covid/covid.reducer';

export default combineReducers({
  app,
  applets,
  form,
  media,
  responses,
  user,
  fcm,
  geolocation,
  covid,
});
