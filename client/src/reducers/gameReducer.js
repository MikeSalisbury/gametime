import { RECEIVE_GAME, RECEIVE_GAMES } from '../actions/types';

export default (state = {}, action) =>  {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GAME:
      const game = { [action.payload._id]: action.payload };
      return game;
    case RECEIVE_GAMES:
      return action.payload;
    default:
      return null;
  }

};
