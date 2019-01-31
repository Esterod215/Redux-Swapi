import {
STAR_WARS_FETCH,
STAR_WARS_FETCH_SUCCESS,
STAR_WARS_FETCH_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching:false,
  error:null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAR_WARS_FETCH:
    return{...state, fetching:true};
    case STAR_WARS_FETCH_SUCCESS:
    return{
      ...state, 
      characters: action.payload,
      fetching: false
  };
  case STAR_WARS_FETCH_FAILURE:
  return {...state,fetching:false,error:action.payload};


    
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
