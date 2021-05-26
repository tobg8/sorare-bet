export default (slots) => {
  let number = 0;
  slots.map((slot) => {
    if (Math.round(slot.avgScore) > 45) {
      number += 1;
    }
  });
  if (number > 0) {
    console.log(false);
    return false;
  }
  return true;
};
