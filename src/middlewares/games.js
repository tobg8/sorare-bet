import axios from 'axios';

import {
  FETCH_CURRENT_LEAGUES,
  saveLeagues,
  FETCH_SLOTS,
  saveSlots,
} from 'src/actions/interface';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_LEAGUES: {
      const fetchLeagues = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/leagues`;
        try {
          const response = await axios.post(url);
          if (response.status === 200) {
            store.dispatch(saveLeagues(response.data));
          }
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchLeagues();
      break;
    }
    case FETCH_SLOTS: {
      const fetchRemainingPlaces = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/places`;
        try {
          const response = await axios.post(url, {
            gameWeek: action.gameWeek,
          });
          if (response.status === 200) {
            store.dispatch(saveSlots(response.data, action.gameWeek));
          }
        }
        catch (error) {
          console.trace(error);
        }
      };
      fetchRemainingPlaces();
      break;
    }
    default:
      next(action);
  }
};

export default games;
