export default (object, cards) => {
  if (!object) {
    return cards;
  }
  try {
    const EXTRA = 'Extra';
    const { position } = object;
    if (position === EXTRA) {
      return cards;
    }
    const filteredCards = cards.filter((card) => card.position === position);
    return filteredCards;
  }
  catch (error) {
    console.trace(error);
  }
  return cards;
};
