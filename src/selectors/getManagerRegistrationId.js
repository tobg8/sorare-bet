export default (managers, id) => {
  if (!managers || !id) {
    return false;
  }

  try {
    const correctManager = managers.filter((manager) => manager.manager_id === id);
    if (correctManager) {
      return correctManager;
    }
    return false;
  }
  catch (error) {
    console.log(error);
  }
  return false;
};
