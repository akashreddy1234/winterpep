// simulates basic banking operations such as creating account depositing money and withdrawing money using javascript functions
// const creaacc="1234"
// console.log("accno:",creaacc)
// const amount=3456789
// console.log("amount:",amount)
// const depmon=3245
// console.log("deposit money:",depmon)
// const total=amount+depmon
// console.log("total money after depositing:",total)
// const withdrawingmo=2345
// console.log("withdrawed money:",withdrawingmo)
// const remanmon=total-withdrawingmo
// console.log("remaining money after withdrawing:",remanmon)


const account = {
  accountNumber: "1234",
  balance: 3456789,
};

console.log("Account Number:", account.accountNumber);
console.log("Initial Balance:", account.balance);
function deposit(balance, amount) {
  const newBalance = balance + amount;
  console.log(`Deposited: ${amount}`);
  console.log(`Balance after deposit: ${newBalance}`);
  return newBalance;
}
function withdraw(balance, amount) {
  const newBalance = balance - amount;
  console.log(`Withdrawn: ${amount}`);
  console.log(`Balance after withdrawal: ${newBalance}`);
  return newBalance;
}
const depositAmount = 3245;
account.balance = deposit(account.balance, depositAmount);
const withdrawalAmount = 2345;
account.balance = withdraw(account.balance, withdrawalAmount);
console.log(`Final Balance: ${account.balance}`);
