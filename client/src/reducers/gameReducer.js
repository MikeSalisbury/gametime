import { RECEIVE_GAME } from '../actions/types';

export default (state = {}, action) =>  {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME:
    if (typeof action.payload === Array) {
      return action.payload[0];
    } else {
      return action.payload;
    }

    default:
      return state;
  }

};
