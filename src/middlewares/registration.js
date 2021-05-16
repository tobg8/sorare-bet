import axios from 'axios';

import {
  REGISTER_TO_LEAGUE,
  managerHasRegistered,
} from 'src/actions/register';

const registration = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_TO_LEAGUE: {
      const registerLeague = async () => {
        const state = store.getState();
        const url = `${process.env.REACT_APP_SERVER_URL}/registration`;
        try {
          const response = await axios.post(url, {
            jwt: state.connection.user.jwt,
            team: state.app.team,
            userName: state.userData.infos.slug,
            userId: state.userData.infos.id,
          });
          if (response.status === 200) {
            return ok;
          }
        }
        catch (error) {
          console.log(error.response);
          if (error.response.status === 403) {
            store.dispatch(managerHasRegistered(error.response.data));
          }
        }
      };
      registerLeague();
      break;
    }
    default:
      next(action);
  }
};

export default registration;
