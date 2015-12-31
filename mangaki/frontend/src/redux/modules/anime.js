import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

// Constants
export const GET_ANIME = 'GET_ANIME'
export const FETCH_ANIME = 'FETCH_ANIME'
export const RECEIVE_ANIME = 'RECEIVE_ANIME'

const initialState = {
  isFetching: false
}

// Actions
export const getAnime = createAction(GET_ANIME)
export const receiveAnime = createAction(RECEIVE_ANIME)

export const fetchAnime = id => {
  return (dispatch, getState) => {
    dispatch(getAnime(id))
    return axios.get(`/api/anime/${id}/`)
    .then(resp => resp.data)
    .then(anime => dispatch(receiveAnime(anime)))
  }
}

export const actions = {
  fetchAnime
}

// Reducer
export default handleActions({
  [GET_ANIME]: (state, {payload}) => ({
    ...state,
    isFetching: true
  }),

  [RECEIVE_ANIME]: (state, {payload}) => ({
    ...state,
    [payload.id]: payload,
    isFetching: false
  })
}, initialState)
