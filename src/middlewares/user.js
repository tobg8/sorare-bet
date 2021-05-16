import axios from 'axios';

import {
  FETCH_USER_INFOS,
  saveUserInfos,
  FETCH_CARDS,
  saveCards,
} from 'src/actions/userData';

import {
  managerIsRegistered,
} from 'src/actions/register';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_INFOS: {
      const fetchData = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_SERVER_URL;
        const url = `${baseUrl}/manager`;
        try {
          const response = await axios.post(url, {
            jwt: state.connection.user.jwt,
          });
          store.dispatch(saveUserInfos(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchData();
      break;
    }
    case FETCH_CARDS: {
      const fetchCards = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_SERVER_URL;
        const url = `${baseUrl}/cards`;
        try {
          const response = await axios.post(url, {
            jwt: state.connection.user.jwt,
          });
          store.dispatch(saveCards(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchCards();
      break;
    }
    default:
      next(action);
  }
};

export default user;
