import {
  OPEN_LEAGUE_INFOS_MODAL,
  CLOSE_LEAGUE_INFOS_MODAL,
  SAVE_MANAGERS_INFOS_FROM_LEAGUE,
} from 'src/actions/leaguesInfos';

const initialState = {
  managers: [],
  modalStatus: false,
};

const showTeams = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_LEAGUE_INFOS_MODAL: {
      return {
        ...state,
        modalStatus: false,
      };
    }
    case OPEN_LEAGUE_INFOS_MODAL: {
      return {
        ...state,
        modalStatus: true,
      };
    }
    case SAVE_MANAGERS_INFOS_FROM_LEAGUE: {
      return {
        ...state,
        managers: action.payload,
      };
    }
    default:
      return state;
  }
};

export default showTeams;
