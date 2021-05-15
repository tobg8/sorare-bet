import {
  HANDLE_HIDDEN_MENU,
} from 'src/actions/interface';

const initialState = {
  menuStatus: false,
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_HIDDEN_MENU: {
      return {
        ...state,
        menuStatus: !state.menuStatus,
      };
    }
    default:
      return state;
  }
};

export default app;
