const SEARCH_FAIL = 'SEARCH_FAIL';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

export function searchFail(payload) {
  return { type: SEARCH_FAIL, payload };
}

export function searchSuccess(payload) {
  return { type: SEARCH_SUCCESS, payload };
}

export function searchData(value) {
  const searchString = value.toLowerCase();
  return async (dispatch) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${searchString}/`);

    dispatch({
      type: SEARCH_SUCCESS,
      payload: await response.json(),
    });
  };
}

export default function search(state = {}, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return Object.assign({}, state, action.payload);
    case SEARCH_FAIL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
