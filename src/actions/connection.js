export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
export const CLOSE_LOGIN_FORM = 'CLOSE_LOGIN_FORM';
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const SAVE_OTP_SESSION = 'SAVE_OTP_SESSION';
export const CLOSE_DOUBLE_AUTH = 'CLOSE_DOUBLE_AUTH';
export const CHANGE_OTP_CODE = 'CHANGE_OTP_CODE';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const DOUBLE_AUTH_LOGIN = 'DOUBLE_AUTH_LOGIN';
export const DOUBLE_AUTH_FAILED = 'DOUBLE_AUTH_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const openLoginForm = () => ({
  type: OPEN_LOGIN_FORM,
});

export const closeLoginForm = () => ({
  type: CLOSE_LOGIN_FORM,
});

export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  name,
});

export const loginAction = () => ({
  type: LOGIN_ACTION,
});

export const saveOtpSession = (otpSessionChallenge) => ({
  type: SAVE_OTP_SESSION,
  otpSessionChallenge,
});

export const closeDoubleAuth = () => ({
  type: CLOSE_DOUBLE_AUTH,
});

export const changeOtpCode = (value) => ({
  type: CHANGE_OTP_CODE,
  value,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

export const doubleAuthLogin = () => ({
  type: DOUBLE_AUTH_LOGIN,
});

export const doubleAuthFailed = (error) => ({
  type: DOUBLE_AUTH_FAILED,
  error,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
