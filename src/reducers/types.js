import 'whatwg-fetch';

const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';

export function fetchTypesSuccess(payload) {
  return { type: FETCH_TYPES_SUCCESS, payload };
}

export function fetchTypes() {
  return dispatch =>
    fetch('https://pokeapi.co/api/v2/type/')
      .then(response => response.json())
      .then(data => dispatch(fetchTypesSuccess(data)));
}

export default function types(state = {}, action) {
  switch (action.type) {
    case FETCH_TYPES_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
