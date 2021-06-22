export default (managers, id) => {
  if (!managers || !id) {
    return false;
  }

  try {
    const foundManager = managers.filter((manager) => manager.manager_id === id);
    if (foundManager) {
      return true;
    }
    return false;
  }
  catch (error) {
    console.log(error);
  }
  return false;
};
