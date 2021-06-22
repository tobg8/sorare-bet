export default (score) => {
  if (score < 10) {
    return {
      backgroundColor: '#495057',
    };
  }
  if (score <= 30) {
    return {
      backgroundColor: '#E2931A',
    };
  }
  if (score > 30 && score < 45) {
    return {
      backgroundColor: '#EFCE1E',
    };
  }
  if (score >= 45 && score < 70) {
    return {
      backgroundColor: '#21C496',
    };
  }
  return {
    backgroundColor: '#009D4F',
  };
};
