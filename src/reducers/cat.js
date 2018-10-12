import {FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, DELETE_CAT_REQUEST, DELETE_CAT_SUCCESS, DELETE_CAT_ERROR} from "../actions/cat";

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function catReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAT_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_CAT_SUCCESS:
            return {...state, loading: false, error: null, data: action.data};
        case FETCH_CAT_ERROR:
            return {...state, loading: false, error: action.err};
        case DELETE_CAT_REQUEST:
            return {...state, loading: true, error: null};
        case DELETE_CAT_SUCCESS:
            return {...state, loading: false, error: null, data: null};
        case DELETE_CAT_ERROR:
            return {...state, loading: false, error: action.err};
        default:
            return state;
    }
}
