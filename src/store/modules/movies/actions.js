import { MoviesProxy } from '../../../proxies'
import * as actions from './action-types';

export default {
  getTrending: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getTrending(payload).then(response => {
        dispatch({ type: actions.GET_TRENDINGS, payload: response });
        resolve();
      }).catch(err => {
        reject();
      }); 
    })
  },

  getMovies: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47', page: payload.page }).getMovies(payload.endpoint).then(response => {
        dispatch({ type: payload.type, payload: response });
        resolve(response)
      }).catch(err => {
        reject();
      })
    })
  },
  getMovie: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getMovie(payload).then(response => {
        dispatch({ type: actions.GET_MOVIE, payload: response });
        resolve(response);
      }).catch(err => {
        reject();
      })
    })
  },

  getCredits: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getCredits(payload).then(response => {
        dispatch({ type: actions.GET_MOVIE_ACTORS, payload: response });
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  },

  searchMovie: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47', query: payload }).searchMovie().then(response => {
        dispatch({ type: actions.SEARCH_MOVIE, payload: response })
        resolve(response)
      }).catch(err => {
        reject(err);
      })
    })
  }
};
