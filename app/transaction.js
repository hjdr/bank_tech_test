export default class Transaction {
  constructor() {
    this.amount = 0;
    this.date;
  }

  credit(input_amount) {
  this.amount += input_amount;
  this.date = new Date();
  }

  debit(input_amount) {
    this.amount -= input_amount;
    this.date = new Date();
  }

  getAmount() {
    return this.amount;
  }

  getDate(date) {
    return this.date;
  }
}