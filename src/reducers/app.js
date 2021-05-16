import {
  HANDLE_HIDDEN_MENU,
  SAVE_LEAGUES,
  CHOOSE_ROLE,
} from 'src/actions/interface';

const initialState = {
  menuStatus: false,
  leagues: [],
  team: [
    {
      position: 'Goalkeeper',
      active: false,
      cardName: '',
      rarity: '',
    },
    {
      position: 'Defender',
      active: false,
      cardName: '',
      rarity: '',
    },
    {
      position: 'Midfielder',
      active: false,
      cardName: '',
      rarity: '',
    },
    {
      position: 'Forward',
      active: false,
      cardName: '',
      rarity: '',
    },
    {
      position: 'Extra',
      active: false,
      cardName: '',
      rarity: '',
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
    default:
      return state;
  }
};

export default app;
