import {
  OPEN_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
  CHANGE_LOGIN_FIELD,
} from 'src/actions/connection';

const initialState = {
  loginStatus: false,
  user: {
    email: '',
    password: '',
  },
};

const connection = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_LOGIN_FORM: {
      return {
        ...state,
        loginStatus: true,
      };
    }
    case CLOSE_LOGIN_FORM: {
      return {
        ...state,
        loginStatus: false,
      };
    }
    case CHANGE_LOGIN_FIELD: {
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export default connection;
