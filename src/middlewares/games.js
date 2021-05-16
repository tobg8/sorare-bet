import axios from 'axios';

import {
  FETCH_CURRENT_LEAGUES,
  saveLeagues,
} from 'src/actions/interface';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_LEAGUES: {
      const fetchLeagues = async () => {
        const url = `${process.env.REACT_APP_PRODUCTION_URL}/leagues`;
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
    default:
      next(action);
  }
};

export default games;
