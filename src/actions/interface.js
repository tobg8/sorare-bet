export const HANDLE_HIDDEN_MENU = 'HANDLE_HIDDEN_MENU';
export const FETCH_CURRENT_LEAGUES = 'FETCH_CURRENT_LEAGUES';
export const SAVE_LEAGUES = 'SAVE_LEAGUES';
export const CHOOSE_ROLE = 'CHOOSE_ROLE';
export const ADD_CARD = 'ADD_CARD';
export const FETCH_SLOTS = 'FETCH_SLOTS';
export const SAVE_SLOTS = 'SAVE_SLOTS';
export const FETCH_MANAGERS = 'FETCH_MANAGERS';
export const SAVE_MANAGERS_FROM_LEAGUE = 'SAVE_MANAGERS_FROM_LEAGUE';
export const HANDLE_TEAM_PREVIEW_MODAL = 'HANDLE_TEAM_PREVIEW_MODAL';
export const CLOSE_TEAM_PREVIEW_MODAL = 'CLOSE_TEAM_PREVIEW_MODAL';
export const FETCH_TEAM = 'FETCH_TEAM';
export const SAVE_MANAGER_TEAM_COMP = 'SAVE_MANAGER_TEAM_COMP';
export const OPEN_MY_TEAM_PREVIEW_MODAL = 'OPEN_MY_TEAM_PREVIEW_MODAL';
export const CLOSE_MY_TEAM_PREVIEW_MODAL = 'CLOSE_MY_TEAM_PREVIEW_MODAL';

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

export const chooseRole = (position) => ({
  type: CHOOSE_ROLE,
  position,
});

export const addCard = (url, rarity, name) => ({
  type: ADD_CARD,
  url,
  rarity,
  name,
});

export const fetchSlots = (gameWeek) => ({
  type: FETCH_SLOTS,
  gameWeek,
});

export const saveSlots = (payload, gameWeek) => ({
  type: SAVE_SLOTS,
  payload,
  gameWeek,
});

export const fetchManagers = (gameWeek) => ({
  type: FETCH_MANAGERS,
  gameWeek,
});

export const saveManagersFromLeague = (payload) => ({
  type: SAVE_MANAGERS_FROM_LEAGUE,
  payload,
});

export const handleTeamPreviewModal = () => ({
  type: HANDLE_TEAM_PREVIEW_MODAL,
});

export const closeTeamPreviewModal = () => ({
  type: CLOSE_TEAM_PREVIEW_MODAL,
});

export const fetchTeam = (registrationId, gameWeek) => ({
  type: FETCH_TEAM,
  registrationId,
  gameWeek,
});

export const saveManagerTeamComp = (payload) => ({
  type: SAVE_MANAGER_TEAM_COMP,
  payload,
});

export const openMyTeamPreviewModal = () => ({
  type: OPEN_MY_TEAM_PREVIEW_MODAL,
});

export const closeMyTeamPreviewModal = () => ({
  type: CLOSE_MY_TEAM_PREVIEW_MODAL,
});
