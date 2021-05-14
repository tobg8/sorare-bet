import {
  OPEN_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
  CHANGE_LOGIN_FIELD,
  SAVE_OTP_SESSION,
  CLOSE_DOUBLE_AUTH,
  CHANGE_OTP_CODE,
  LOGIN_FAILED,
  DOUBLE_AUTH_FAILED,
  LOGIN_SUCCESS,
} from 'src/actions/connection';

const initialState = {
  loginStatus: false,
  doubleAuth: false,
  user: {
    email: 'sorarebusiness@yahoo.com',
    password: 'theomula987!',
    otpSessionChallenge: '',
    otpCode: '',
    error: null,
    logged: false,
  },
};

const connection = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_LOGIN_FORM: {
      return {
        ...state,
        loginStatus: true,
        user: {
          ...state.user,
          error: null,
        },
      };
    }
    case CLOSE_LOGIN_FORM: {
      return {
        ...state,
        loginStatus: false,
        user: {
          ...state.user,
          password: '',
        },
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
    case SAVE_OTP_SESSION: {
      return {
        ...state,
        doubleAuth: true,
        user: {
          ...state.user,
          otpSessionChallenge: action.otpSessionChallenge,
        },
      };
    }
    case CLOSE_DOUBLE_AUTH: {
      return {
        ...state,
        doubleAuth: false,
        user: {
          ...state.user,
          otpCode: '',
          error: null,
          authError: null,
        },
      };
    }
    case CHANGE_OTP_CODE: {
      return {
        ...state,
        user: {
          ...state.user,
          otpCode: action.value,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginStatus: true,
        user: {
          ...state.user,
          error: action.error,
        },
      };
    }
    case DOUBLE_AUTH_FAILED: {
      return {
        ...state,
        doubleAuth: true,
        user: {
          ...state.user,
          authError: action.error,
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          error: '',
          otpSessionChallenge: '',
          authError: '',
          logged: true,
          jwt: action.payload.jwtToken.token,
          name: action.payload.slug,
        },
      };
    }
    default:
      return state;
  }
};

export default connection;
