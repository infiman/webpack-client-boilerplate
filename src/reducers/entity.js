import 'whatwg-fetch';

const CACHE_ENTITY_SUCCESS = 'CACHE_ENTITY_SUCCESS';
const CACHE_ENTITY_FAILED = 'CACHE_ENTITY_FAILED';

export function cacheEntitySuccess(payload) {
  return { type: CACHE_ENTITY_SUCCESS, payload };
}

export function cacheEntityFailed(payload) {
  return { type: CACHE_ENTITY_FAILED, payload };
}

export function cacheEntity(value) {
  return dispatch =>
    fetch(`https://pokeapi.co/api/v2${value}`)
      .then((response) => {
        if (response.ok) {
          response.json().then(data =>
            dispatch(cacheEntitySuccess({ [value]: data })),
          );
        } else {
          dispatch(cacheEntityFailed({ [value]: { failed: true } }));
        }
      });
}

export default function entity(state = {}, action) {
  switch (action.type) {
    case CACHE_ENTITY_SUCCESS:
      return Object.assign({}, state, action.payload);
    case CACHE_ENTITY_FAILED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
