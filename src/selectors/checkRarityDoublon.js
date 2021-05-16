export default (slots) => {
  const rarities = slots.map((slot) => slot.rarity);
  let number = 0;
  rarities.map((item) => {
    if (item === 'common') {
      number += 1;
    }
  });
  if (number > 1) {
    return false;
  }
  return true;
};
