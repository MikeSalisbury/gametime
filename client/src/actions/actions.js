import axios from 'axios';
import { FETCH_USER, CREATE_GAME } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const createGame = (game) => async dispatch => {
  const res = await axios.post('/api/games', { game })
  dispatch({ type: CREATE_GAME, payload: res.data });
}
