import {FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, DELETE_DOG_REQUEST, DELETE_DOG_SUCCESS, DELETE_DOG_ERROR} from "../actions/dog";

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function DogReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_DOG_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_DOG_SUCCESS:
            return {...state, loading: false, error: null, data: action.data};
        case FETCH_DOG_ERROR:
            return {...state, loading: false, error: action.err};
        case DELETE_DOG_REQUEST:
            return {...state, loading: true, error: null};
        case DELETE_DOG_SUCCESS:
            return {...state, loading: false, error: null, data: null};
        case DELETE_DOG_ERROR:
            return {...state, loading: false, error: action.err};
        default:
            return state;
    }
}