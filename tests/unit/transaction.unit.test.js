import Transaction from '../../app/transaction';
import { stubDate } from '../test_helper/date-helper';

const constantDate = new Date('2017-06-13T04:41:20')

stubDate(constantDate)

test('creates a credit transaction', () => {
  var transaction = new Transaction();
  transaction.credit(1000);
  expect(transaction.getAmount()).toEqual(1000);
});

test('creates a debit transaction', () => {
  var transaction = new Transaction();
  transaction.debit(500)
  expect(transaction.getAmount()).toEqual(-500)
});

test('creates a date for the transaction', () => {
  var transaction = new Transaction();
  transaction.debit(500)
  expect(transaction.getDate()).toEqual(constantDate)
});