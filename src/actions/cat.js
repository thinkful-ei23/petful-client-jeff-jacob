import axios from 'axios';
import { API_BASE_URL } from '../config';


export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({ type: FETCH_CAT_REQUEST });


export const FETCH_CAT_SUCCESS ='FETCH_CAT_SUCCESS';
export const fetchCatSuccess = data => ({
    type: FETCH_CAT_SUCCESS,
    data
});

export const FETCH_CAT_ERROR ='FETCH_CAT_ERROR';
export const fetchCatError = err => ({
    type: FETCH_CAT_ERROR,
    err
});

export const fetchCat = () => async dispatch => {
    dispatch(fetchCatRequest())
    try {
        const res = await axios.get(`${API_BASE_URL}/api/cat`);
        dispatch(fetchCatSuccess(res));
    } catch (e) {
        dispatch(fetchCatError(e));
    }
}







