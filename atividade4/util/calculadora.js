/**
 * Soma dois números inteiros
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number} a soma entre a e b
 */
function somar(a, b) {
    return Number(a) + Number(b);
}

/**
 * Subtrai dois números inteiros
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number} a diferença entre a e b
 */
function subtrair(a, b) {
    return Number(a) - Number(b);
}

/**
 * Multiplica dois números inteiros
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number} o produto entre a e b
 */
function multiplicar(a, b) {
    return Number(a) * Number(b);
}

/**
 * Divide dois números inteiros
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number} o quociente entre a e b
 */
function dividir(a, b) {
    return Number(a) / Number(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};
