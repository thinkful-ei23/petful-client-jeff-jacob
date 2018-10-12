import axios from 'axios';
import { API_BASE_URL } from '../config';


export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({ type: FETCH_DOG_REQUEST });


export const FETCH_DOG_SUCCESS ='FETCH_DOG_SUCCESS';
export const fetchDogSuccess = data => ({
    type: FETCH_DOG_SUCCESS,
    data
});

export const FETCH_DOG_ERROR ='FETCH_DOG_ERROR';
export const fetchDogError = err => ({
    type: FETCH_DOG_ERROR,
    err
});
export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const deleteDogRequest = () => ({ type: DELETE_DOG_REQUEST });


export const DELETE_DOG_SUCCESS ='DELETE_DOG_SUCCESS';
export const deleteDogSuccess = () => ({
    type: DELETE_DOG_SUCCESS
});

export const DELETE_DOG_ERROR ='DELETE_DOG_ERROR';
export const deleteDogError = err => ({
    type: DELETE_DOG_ERROR,
    err
});

export const fetchDog = () => async dispatch => {
    dispatch(fetchDogRequest())
    try {
        const res = await axios.get(`${API_BASE_URL}/api/dog`);
        dispatch(fetchDogSuccess(res));
    } catch (e) {
        dispatch(fetchDogError(e));
    }
}
export const deleteDog = () => async dispatch => {
  dispatch(deleteDogRequest());
  try {
      const res = await axios.delete(`${API_BASE_URL}/api/dog`);
      dispatch(deleteDogSuccess(res));
  } catch(e) {
      dispatch(deleteDogError(e));
  }
}