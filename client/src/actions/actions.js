import axios from 'axios';
import { FETCH_USER, RECEIVE_GAME } from './types';

export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: user.data });
  };

export const fetchGame = (id) => dispatch => (
  axios.get(`/api/games/${id}`)
  .then(game => dispatch({ type: RECEIVE_GAME, payload: game.data }))
);

export const fetchGames = () => async dispatch => {
  const games = await axios.get('/api/games/index');
  dispatch({ type: FETCH_GAMES, payload: games.data})
}

// export const createGame = (game) => async dispatch => {
//   const res = await axios.post('/api/games', { game })
//   dispatch({ type: CREATE_GAME, payload: res.data });
// }

export const createGame = (game) => dispatch => (
  axios.post('/api/games', game )
    .then( newGame => {
      dispatch({ type: RECEIVE_GAME, payload: newGame.data });
    return newGame.data._id;
  }));
