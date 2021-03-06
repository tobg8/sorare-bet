import axios from 'axios';

import {
  REGISTER_TO_LEAGUE,
  managerHasRegistered,
  MANAGER_IS_REGISTERED,
} from 'src/actions/register';

const registration = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_TO_LEAGUE: {
      const registerLeague = async () => {
        const state = store.getState();
        const url = `${process.env.REACT_APP_SERVER_URL}/registration`;
        console.log('herererr');
        try {
          const response = await axios.post(url, {
            jwt: state.connection.user.jwt,
            team: state.app.team,
            userName: state.userData.infos.slug,
            userId: state.userData.infos.id,
            userPicture: state.userData.infos.profile.pictureUrl,
          });
          if (response.status === 200) {
            return store.dispatch(managerHasRegistered(response.data));
          }
        }
        catch (error) {
          if (error.response.status === 403) {
            store.dispatch(managerHasRegistered(error.response.data));
          }
          if (error.response.status === 400) {
            console.log(error);
            store.dispatch(managerHasRegistered(error.response.data));
          }
        }
        return true;
      };
      registerLeague();
      break;
    }
    case MANAGER_IS_REGISTERED: {
      const isManagerRegistered = async () => {
        const state = store.getState();
        const url = `${process.env.REACT_APP_SERVER_URL}/registered`;
        try {
          const response = await axios.post(url, {
            managerId: state.userData.infos.id,
          });
          if (response.status === 200) {
            return store.dispatch(managerHasRegistered(response.data));
          }
        }
        catch (error) {
          console.log(error);
        }
        return true;
      };
      isManagerRegistered();
      break;
    }
    default:
      next(action);
  }
};

export default registration;
