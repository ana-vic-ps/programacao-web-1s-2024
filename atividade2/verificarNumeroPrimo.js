function verificarNumPrimo(n) {
  if (n <= 1) {
    return false;
  }

  if (n != 2 && n % 2 == 0) {
    return false;
  }

  for (let i = 3; i < n; i += 2) {
    if (n % 1 == 0) {
      return false;
    }
  }
  return true;
}
console.log(verificarNumPrimo(0));
console.log(verificarNumPrimo(1));
console.log(verificarNumPrimo(2));
console.log(verificarNumPrimo(3));
console.log(verificarNumPrimo(7));
console.log(verificarNumPrimo(83));
console.log(verificarNumPrimo(100));
console.log(verificarNumPrimo(991));
console.log(verificarNumPrimo(104729));
console.log(verificarNumPrimo(143489077777));
