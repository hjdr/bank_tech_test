export default class Transaction {
  constructor() {
    this.amount = 0
  }

  credit(input_amount) {
  this.amount += input_amount;
  }

  debit(input_amount) {
    this.amount -= input_amount;
    }
}