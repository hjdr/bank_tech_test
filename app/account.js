export default class Account {
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  statementInsert(transaction) {
    this.balance += transaction.getAmount();
    this.statement.push(transaction)
   }
}