export default (cookie) => {
  if (!cookie) {
    return null;
  }
  const correctCookie = JSON.parse(cookie);
  const date = correctCookie.timestamp;
  const now = Date.now();
  const dateDiff = now - date;
  const minutesPassed = dateDiff / 60000;
  if (minutesPassed > 20) {
    localStorage.removeItem('jwt');
    // can we dispatch action here ? to set logged to false and remove jwt from state.
  }
  return true;
};
