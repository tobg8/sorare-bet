import axios from 'axios';

import {
  FETCH_CURRENT_LEAGUES,
  saveLeagues,
  FETCH_SLOTS,
  saveSlots,
  FETCH_MANAGERS,
  saveManagersFromLeague,
  FETCH_TEAM,
  saveManagerTeamComp,
} from 'src/actions/interface';

import {
  FETCH_MANAGERS_FROM_LEAGUE,
  saveManagersInfosFromLeague,
} from 'src/actions/leaguesInfos';

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
    case FETCH_MANAGERS: {
      const fetchManagersFromLeague = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/manager-in-league`;
        try {
          const response = await axios.post(url, {
            gameWeek: action.gameWeek,
          });
          if (response.status === 200) {
            store.dispatch(saveManagersFromLeague(response.data));
          }
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchManagersFromLeague();
      break;
    }
    case FETCH_TEAM: {
      const fetchTeam = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/manager-team`;
        try {
          const response = await axios.post(url, {
            registrationId: action.registrationId,
            gameWeek: action.gameWeek,
          });
          if (response.status === 200) {
            store.dispatch(saveManagerTeamComp(response.data));
          }
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchTeam();
      break;
    }
    case FETCH_MANAGERS_FROM_LEAGUE: {
      console.log(action);
      const fetchManagers = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/managers-in-league`;
        try {
          const response = await axios.post(url, {
            gameWeek: action.gameWeek,
          });
          if (response.status === 200) {
            store.dispatch(saveManagersInfosFromLeague(response.data));
          }
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchManagers();
      break;
    }
    default:
      next(action);
  }
};

export default games;
