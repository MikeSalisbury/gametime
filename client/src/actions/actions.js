import axios from 'axios';
import { FETCH_USER, RECEIVE_GAME, RECEIVE_GAMES } from './types';

export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: user.data });
  };

export const fetchGames = () => dispatch => {
  axios.get('/api/games')
  .then(games => dispatch({ type: RECEIVE_GAMES, payload: games.data}))
};

export const fetchGame = (id) => dispatch => (
  axios.get(`/api/games/${id}`)
  .then(game => dispatch({ type: RECEIVE_GAME, payload: game.data }))
);


// export const createGame = (game) => async dispatch => {
//   const game = await axios.post('/api/games', game )
//   dispatch({ type: RECEIVE_GAME, payload: game.data });
//   return game.data._id
// }

export const createGame = (game) => dispatch => (
  axios.post('/api/games', game )
    .then( newGame => {
      dispatch({ type: RECEIVE_GAME, payload: newGame.data });
    return newGame.data._id;
  }));
