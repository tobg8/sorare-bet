export default (slots) => {
  const items = slots.filter((slot) => slot.rarity === '');
  return items;
};
