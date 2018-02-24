import { RECEIVE_GAME } from '../actions/types';

export default (state = {}, action) =>  {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME:
      return action.payload;
    default:
      return state;
  }

};
