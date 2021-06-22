import {
  SAVE_USER_INFOS,
  SAVE_CARDS,
} from 'src/actions/userData';

const initialState = {
  infoReceived: false,
  infos: {
    slug: '',
    profile: {
      pictureUrl: '',
    },
  },
  cards: [],
};

const userData = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFOS: {
      return {
        ...state,
        infoReceived: true,
        infos: action.payload,
      };
    }
    case SAVE_CARDS: {
      return {
        ...state,
        cards: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userData;
