import Transaction from '../../app/transaction';

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
  Transaction.prototype.createDate = jest.fn();
  var transaction = new Transaction();

  transaction.createDate.mockImplementation(() => '13/06/2017' )
  transaction.debit(500)
  expect(transaction.createDate()).toEqual('13/06/2017')
});