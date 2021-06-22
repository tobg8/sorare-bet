export default (slots) => {
  const valueArray = slots.map((item) => item.cardName);
  const isDuplicate = valueArray.some((item, index) => valueArray.indexOf(item) !== index);
  if (isDuplicate) {
    return false;
  }
  return true;
};
