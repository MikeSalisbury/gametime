import { RECEIVE_GAME } from '../actions/types';

export default (state = {}, action) =>  {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME:
    console.log(action.payload[0]);
      return action.payload[0];
    default:
      return state;
  }

};
