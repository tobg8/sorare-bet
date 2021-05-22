export const OPEN_LEAGUE_INFOS_MODAL = 'OPEN_LEAGUE_INFOS_MODAL';
export const CLOSE_LEAGUE_INFOS_MODAL = 'CLOSE_LEAGUE_INFOS_MODAL';
export const FETCH_MANAGERS_FROM_LEAGUE = 'FETCH_MANAGERS_FROM_LEAGUE';
export const SAVE_MANAGERS_INFOS_FROM_LEAGUE = 'SAVE_MANAGERS_INFOS_FROM_LEAGUE';

export const openLeagueInfosModal = () => ({
  type: OPEN_LEAGUE_INFOS_MODAL,
});

export const closeLeagueInfosModal = () => ({
  type: CLOSE_LEAGUE_INFOS_MODAL,
});

export const fetchManagersFromLeague = (gameWeek) => ({
  type: FETCH_MANAGERS_FROM_LEAGUE,
  gameWeek,
});

export const saveManagersInfosFromLeague = (payload) => ({
  type: SAVE_MANAGERS_INFOS_FROM_LEAGUE,
  payload,
});
