export const REGISTER_TO_LEAGUE = 'REGISTER_TO_LEAGUE';
export const MANAGER_HAS_REGISTERED = 'MANAGER_HAS_REGISTERED';
export const MANAGER_IS_REGISTERED = 'MANAGER_IS_REGISTERED';

export const registerToLeague = () => ({
  type: REGISTER_TO_LEAGUE,
});

export const managerHasRegistered = (data) => ({
  type: MANAGER_HAS_REGISTERED,
  data,
});

export const managerIsRegistered = (data) => ({
  type: MANAGER_IS_REGISTERED,
  data,
});
