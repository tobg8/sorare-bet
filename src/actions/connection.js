export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
export const CLOSE_LOGIN_FORM = 'CLOSE_LOGIN_FORM';
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

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
