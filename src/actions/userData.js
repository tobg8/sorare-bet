export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const saveUserInfos = (payload) => ({
  type: SAVE_USER_INFOS,
  payload,
});
