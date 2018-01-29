import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
    return state;
  }
}
