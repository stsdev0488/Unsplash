import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from '../actions/search';

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        data:
          action.payload.pageNumber === 1
            ? [...action.payload.data]
            : [...state.data, ...action.payload.data],
        loading: false,
        success: true,
        error: null,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
