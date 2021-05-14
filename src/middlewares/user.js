import axios from 'axios';

import {
  FETCH_USER_INFOS,
  saveUserInfos,
} from 'src/actions/userData';

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
    default:
      next(action);
  }
};

export default user;
