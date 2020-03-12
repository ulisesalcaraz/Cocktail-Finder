import axios from 'axios';

//const
const initialData = {
  searchText: '',
  searchResults: [],
  fetching: false,
};
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const SEARCH_DRINKS = 'SEARCH_DRINKS';
const SEARCH_DRINKS_SUCCESS = 'SEARCH_DRINKS_SUCCESS';
const SEARCH_DRINKS_ERROR = 'SEARCH_DRINKS_ERROR';

const SEARCH_DRINKS_LOCALLY = 'SEARCH_DRINKS_LOCALLY';

//reducer
const searchReducer = (state = initialData, action) => {
  switch (action.type) {
    case SEARCH_DRINKS:
      return {...state, fetching: true, searchText: action.payload};

    case SEARCH_DRINKS_LOCALLY:
      return {...state, fetching: false};

    case SEARCH_DRINKS_SUCCESS:
      return {...state, fetching: false, searchResults: action.payload};

    case SEARCH_DRINKS_ERROR:
      return {...state, fetching: false};

    default:
      return state;
  }
};

export default searchReducer;

//action creator
/* export const searchDrinksAction = searchTerm => (dispatch, getState) => {
  let {searchResults} = getState().search;
  let result = [];
  const regex = new RegExp(`${searchTerm}`);

  dispatch({
    type: SEARCH_DRINKS,
    payload: searchTerm,
  });

  const filterOne = searchResults.some(
    searchResults.item.strDrink.contains(searchTerm),
  );
  filterOne
    ? (result =
        searchResults.filter(searchResult =>
          searchResults.item.strDrink.contains(searchTerm),
        ) &&
        dispatch({
          type: SEARCH_DRINKS_LOCALLY,
          payload: result,
        }))
    : axios
        .get(URL`${searchTerm}`)
        .then(res => {
          dispatch({
            type: SEARCH_DRINKS_SUCCESS,
            payload: res.data.drinks,
          });
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: SEARCH_DRINKS_ERROR,
            error: error.response.message,
          });
        });
}; */
