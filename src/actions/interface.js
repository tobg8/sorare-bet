export const HANDLE_HIDDEN_MENU = 'HANDLE_HIDDEN_MENU';
export const FETCH_CURRENT_LEAGUES = 'FETCH_CURRENT_LEAGUES';
export const SAVE_LEAGUES = 'SAVE_LEAGUES';

export const handleHiddenMenu = () => ({
  type: HANDLE_HIDDEN_MENU,
});

export const fetchCurrentLeagues = () => ({
  type: FETCH_CURRENT_LEAGUES,
});

export const saveLeagues = (payload) => ({
  type: SAVE_LEAGUES,
  payload,
});
