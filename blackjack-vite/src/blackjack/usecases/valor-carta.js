

/**
 * return the value of a gven card from blackjack deck
 * @param {string} carta - id of a card, example: 2D. AC
 *
 * @return {number} - the numeric value of a given card
 * */
export const valorCarta = (carta) => {

    if (!carta ){
        throw new Error('La carta debe tener un valor Valido');
    }

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}