import _ from "underscore";

/*Funcion para crear el deck de cartas
* recibe
* @param {tiposCarta} -> tipos de cartas Corazones, Diamantes, etc
* @param {tiposEspeciales} -> tipos de cartas queen, king, etc
*
* */


// exportacion del modulo

/**
 * create a new deck shuffled
 * @param {string[]} tiposCarta - types of cards in Blackjack
 * @param {string[]} tiposEspeciales - especial cards for 11 - 13 number in a blackjack deck
 *
 * @return {string[]}
 *
 * */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    console.log(typeof tiposCarta);
    if (!tiposCarta || tiposCarta.length === 0) {
        throw new Error('tiposCarta must be string[] ');
    }

    if (!tiposEspeciales || tiposEspeciales.length === 0)  {
        throw new Error('tiposEspeciales must be string[] ');
    }



    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );

    deck = _.shuffle(deck);

    return deck;
}
// exportacion por defecto
//export defaul crearDeck;