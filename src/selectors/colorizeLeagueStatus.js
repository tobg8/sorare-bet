export default (status) => {
  if (status === 'opened') {
    return 'green';
  }
  if (status === 'started') {
    return 'orange';
  }
  return 'grey';
};
