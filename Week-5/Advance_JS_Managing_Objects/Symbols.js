function generateTransactionId() {
  let index = 0;
  return function () {
    index++;
    const id = "TRANSACTION_ID_" + index;
    const TRANSACTION_ID = Symbol(id);
    return TRANSACTION_ID;
  };
}

console.log(generateTransactionId());
console.log(generateTransactionId());
console.log(generateTransactionId());
console.log(generateTransactionId());
