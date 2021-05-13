import axios from 'axios';
import bcrypt from 'bcrypt';
// Actions

const login = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default login;
