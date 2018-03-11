import axios from 'axios';

const FETCH_TYPES = 'herbs/types/FETCH_TYPES';
const FETCH_TYPES_SUCCESS = 'herbs/types/FETCH_TYPES_SUCCESS';
const FETCH_TYPES_FAILURE = 'herbs/types/FETCH_TYPES_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPES:
      return {
        ...state,
        loading: true,
      }
    case FETCH_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data,
      }
    case FETCH_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export const fetchTypes = () => async dispatch => {
  dispatch({ type: FETCH_TYPES });
  try {
    const types = await axios.get('http://localhost:3001/api/v1/item_types');
    dispatch({ type: FETCH_TYPES_SUCCESS, payload: types });
  }
  catch (err) {
    dispatch({ type: FETCH_TYPES_FAILURE, payload: err });
    // throw new Error('failed to fetch types');
  }

}
