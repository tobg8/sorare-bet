import {
  HANDLE_HIDDEN_MENU,
  SAVE_LEAGUES,
} from 'src/actions/interface';

const initialState = {
  menuStatus: false,
  leagues: [],
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
    default:
      return state;
  }
};

export default app;
