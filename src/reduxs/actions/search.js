import { toJson } from 'unsplash-js';
import ApiHandler from 'services/ApiHandler';
import { PER_PAGE } from 'config';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

const searchSuccess = (payload) => ({
  type: SEARCH_SUCCESS,
  payload,
});

const searchError = (payload) => ({
  type: SEARCH_ERROR,
  payload,
});

export const search = ({ filter, pageNumber }) => (dispatch) => {
  dispatch(searchRequest());
  ApiHandler.search
    .users(filter, pageNumber, PER_PAGE)
    .then(toJson)
    .then((data) => {
      if (data.results) {
        dispatch(searchSuccess({ data: data.results, pageNumber }));
      } else if (data.errors) {
        dispatch(searchError(data.errors[0]));
      }
    })
    .catch((error) => dispatch(searchError('Unable to load users!')));
};
