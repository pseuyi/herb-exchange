import axios from 'axios';

const FETCH_MARKETS = 'herbs/markets/FETCH_MARKETS';
const FETCH_MARKETS_SUCCESS = 'herbs/markets/FETCH_MARKETS_SUCCESS';
const FETCH_MARKETS_FAILURE = 'herbs/markets/FETCH_MARKETS_FAILURE';
const CREATE_MARKET = 'herbs/markets/CREATE_MARKET';
const CREATE_MARKET_SUCCESS = 'herbs/markets/CREATE_MARKET_SUCCESS';
const CREATE_MARKET_FAILURE = 'herbs/markets/CREATE_MARKET_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKETS:
      return {
        ...state,
        loading: true,
      }
    case FETCH_MARKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data,
      }
    case FETCH_MARKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      }
    case CREATE_MARKET_SUCCESS:
      return {
        ...state,
        data: Object.assign({}, state.data, action.payload)
      }
    default:
      return state;
  }
};

export const fetchMarkets = () => async dispatch => {
  dispatch({ type: FETCH_MARKETS });
  try {
    const markets = await axios.get('http://localhost:3001/api/v1/markets');
    dispatch({ type: FETCH_MARKETS_SUCCESS, payload: markets });
  }
  catch (err) {
    dispatch({ type: FETCH_MARKETS_FAILURE, payload: err });
    // throw new Error('failed to fetch markets');
  }
}

export const createMarket = () => async dispatch => {
  dispatch({ type: CREATE_MARKET });
  try {
    const market = await axios.post('http://localhost:3001/api/v1/markets');
    dispatch({ type: CREATE_MARKET_SUCCESS, payload: market });
  }
  catch (err) {
    dispatch({ type: CREATE_MARKET_FAILURE, payload: err });
    // throw new Error('failed to fetch markets');
  }
}
