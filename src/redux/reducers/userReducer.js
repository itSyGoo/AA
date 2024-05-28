import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  INIT_USER_FROM_STORAGE,
  GET_USER_INFO,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_RENT_JOBS,
} from "../actions/userActions";

const initialState = {
  isLoading: false,
  user: null,
  info: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case INIT_USER_FROM_STORAGE:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_INFO:
      return {
        ...state,
        info: action.payload,
      };
    case GET_RENT_JOBS:
      return {
        ...state,
        rentJobs: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
