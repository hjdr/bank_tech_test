export default class Account {
  constructor() {
    this.balance = 0;
  }

  statementInsert(transaction) {
    this.balance += transaction.getAmount();
   }
}