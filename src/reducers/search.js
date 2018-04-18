const SEARCH_FAIL = 'SEARCH_FAIL';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

// const initialState = { count: 0, previous: null, results: [] };

export function searchData(value) {
  const searchString = value.toLowerCase();
  return async (dispatch) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${searchString}/`);
    if (response.ok) {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: await response.json(),
      });
    } else {
      dispatch({ type: SEARCH_FAIL });
    }
  };
}

export default function search(state = {}, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

// export default function entities(state = initialState, { type, payload }) {
//   case GOOD:
//     return {
//       ...state,
//       [payload.url]: payload
//     }
//   default:
//     return state
// }


// {
//   '1': {
//     name,
//     title,
//     expiery_at:
//     ...
//   },
//   '2': {
//     name,
//     title,
//     ...
//   },
//   ...
// }
