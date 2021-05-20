import {
  HANDLE_HIDDEN_MENU,
  SAVE_LEAGUES,
  CHOOSE_ROLE,
  ADD_CARD,
  SAVE_SLOTS,
} from 'src/actions/interface';

import {
  MANAGER_HAS_REGISTERED,
} from 'src/actions/register';

const initialState = {
  menuStatus: false,
  leagues: [],
  team: [
    {
      position: 'Goalkeeper',
      active: false,
      cardName: '1',
      rarity: '',
      url: '',
    },
    {
      position: 'Defender',
      active: false,
      cardName: '2',
      rarity: '',
      url: '',
    },
    {
      position: 'Midfielder',
      active: false,
      cardName: '3',
      rarity: '',
      url: '',
    },
    {
      position: 'Forward',
      active: false,
      cardName: '4',
      rarity: '',
      url: '',
    },
    {
      position: 'Extra',
      active: false,
      cardName: '5',
      rarity: '',
      url: '',
    },
  ],
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_HIDDEN_MENU: {
      return {
        ...state,
        menuStatus: !state.menuStatus,
      };
    }
    case SAVE_LEAGUES: {
      return {
        ...state,
        leagues: action.payload,
      };
    }
    case CHOOSE_ROLE: {
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.position === action.position) {
            return {
              ...player,
              active: true,
            };
          }
          if (player.position !== action.position) {
            return {
              ...player,
              active: false,
            };
          }
          return player;
        }),
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.active) {
            return {
              ...player,
              cardName: action.name,
              rarity: action.rarity,
              url: action.url,
            };
          }
          return player;
        }),
      };
    }
    case MANAGER_HAS_REGISTERED: {
      return {
        ...state,
        message: action.data.message,
        registered: action.data.registered,
      };
    }
    case SAVE_SLOTS: {
      return {
        ...state,
        leagues: state.leagues.map((league) => {
          if (league.gameWeek === action.gameWeek) {
            return {
              ...league,
              max_places: action.payload.places_left,
              locked_places: action.payload.locked_places,
            };
          }
          return league;
        }),
      };
    }
    default:
      return state;
  }
};

export default app;
