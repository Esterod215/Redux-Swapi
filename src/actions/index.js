// we'll need axios
import axios from 'axios';

export const STAR_WARS_FETCH = 'STAR_WARS_FETCH';
export const STAR_WARS_FETCH_SUCCESS = 'STAR_WARS_FETCH_SUCCESS';
export const STAR_WARS_FETCH_FAILURE = 'STAR_WARS_FETCH_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getChars = () => dispatch =>{
    dispatch({type:STAR_WARS_FETCH});
    axios
    .get('https://swapi.co/api/people/')
    .then(res =>  dispatch({type:STAR_WARS_FETCH_SUCCESS, payload:res.data.results}))
    
    .catch(err => dispatch({type:STAR_WARS_FETCH_FAILURE, payload: err}));
}