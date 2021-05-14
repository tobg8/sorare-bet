import {
  SAVE_USER_INFOS,
} from 'src/actions/userData';

const initialState = {
  infoReceived: false,
  infos: {
    slug: '',
    profile: {
      pictureUrl: '',
    },
  },
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
    default:
      return state;
  }
};

export default userData;
