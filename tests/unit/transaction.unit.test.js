import Transaction from '../../app/transaction';

test('allows amount to be deposited to bank', () => {
  var transaction = new Transaction();
  transaction.credit(1000);
  expect(transaction.amount).toEqual(1000);
});

test('allows amount to be withdrawn from bank', () => {
  var transaction = new Transaction();
  transaction.debit(500)
  expect(transaction.amount).toEqual(-500)
});