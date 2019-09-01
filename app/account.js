export default class Account {
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  statementInsert(transaction) {
    this.balance += transaction.getAmount();
    this.statement.push( { 
      transaction: transaction,
      balance: this.balance
    });
   }

  statementPrint() {
    console.log("date || credit || debit || balance")
    this.statement.forEach(function(line) {
      console.log(`${line.transaction.date} || ${this._transactionCreditOrDebit(line)} ${line.balance} ||`);
    }.bind(this));
  };

  _transactionCreditOrDebit(line) {
    if (line.transaction.amount > 0 ) {
      return `${line.transaction.amount} || ||`
    } else {
      return `|| ${line.transaction.amount} ||`
    }
  }
};