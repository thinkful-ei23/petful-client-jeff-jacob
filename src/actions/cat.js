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
export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const deleteCatRequest = () => ({ type: DELETE_CAT_REQUEST });


export const DELETE_CAT_SUCCESS ='DELETE_CAT_SUCCESS';
export const deleteCatSuccess = () => ({
    type: DELETE_CAT_SUCCESS
});

export const DELETE_CAT_ERROR ='DELETE_CAT_ERROR';
export const deleteCatError = err => ({
    type: DELETE_CAT_ERROR,
    err
});

export const fetchCat = () => async dispatch => {
    dispatch(fetchCatRequest())
    try {
        const res = await axios.get(`${API_BASE_URL}api/cat`);
        dispatch(fetchCatSuccess(res));
    } catch (e) {
        dispatch(fetchCatError(e));
    }
}
export const deleteCat = () => async dispatch => {
    dispatch(deleteCatRequest());
    try {
        const res = await axios.delete(`${API_BASE_URL}/api/cat`);
        dispatch(deleteCatSuccess(res));
    } catch(e) {
        dispatch(deleteCatError(e));
    }
}







