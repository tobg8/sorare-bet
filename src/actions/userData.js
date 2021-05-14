export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const FETCH_CARDS = 'FETCH_CARDS';
export const SAVE_CARDS = 'SAVE_CARDS';

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const saveUserInfos = (payload) => ({
  type: SAVE_USER_INFOS,
  payload,
});

export const fetchCards = () => ({
  type: FETCH_CARDS,
});

export const saveCards = (payload) => ({
  type: SAVE_CARDS,
  payload,
});
