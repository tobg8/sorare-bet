export default (currentGW, cards) => {
  const cardsWithNextMatch = cards.filter((card) => card.player.activeClub.upcomingGames.length > 0);
  const newArray = [];
  cardsWithNextMatch.map((card) => {
    card.player.activeClub.upcomingGames.map((game) => {
      const allowedPlayers = game.so5Fixture !== null && game.so5Fixture.gameWeek === currentGW;
      if (allowedPlayers) {
        return newArray.push(card);
      }
    });
    return newArray;
  });
  return newArray;
};
