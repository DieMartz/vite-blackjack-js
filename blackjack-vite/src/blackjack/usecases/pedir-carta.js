
/**
 * returns the top card in the deck
 * @param {Array<String>} deck - blackJack deck
 *
 * @return {string}
 *
 * */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}