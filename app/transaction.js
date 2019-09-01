var moment = require('moment');

export default class Transaction {
  constructor() {
    this.amount = 0;
    this.date;
  }

  credit(input_amount) {
    this.amount += input_amount;
    this.createDate()
  }

  debit(input_amount) {
    this.amount -= input_amount;
    this.createDate()
  }

  getAmount() {
    return this.amount;
  }

  getDate() {
    return this.date;
  }

  createDate() {
    var date = moment().format('D/MM/YYYY');
    this.date = date
  } 
}