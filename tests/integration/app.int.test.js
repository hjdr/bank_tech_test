import Transaction from '../../app/transaction';
import Account from '../../app/account';

// Given I am a bank account holder
// When I make a deposit of 1000
// Then the balance increases by 1000

test('deposit to bank account', () => {
  var account = new Account();
  let transaction = new Transaction();
  transaction.credit(1000);
  account.statementInsert(transaction);
  expect(account.balance).toBe(1000);
});

test('multiple deposits to bank account', () => {
  var account = new Account();

  var transaction = new Transaction();
  transaction.credit(1000);
  account.statementInsert(transaction);

  var transaction = new Transaction();
  transaction.credit(500);
  account.statementInsert(transaction);

  expect(account.balance).toBe(1500);
}); 

// Given I am a bank account holder
// When I make a withdrawal of 500
// Then the balance decreases by 500

test('withdraw from bank account', () => {
  var account = new Account();

  var transaction = new Transaction();
  transaction.credit(2000);
  account.statementInsert(transaction);

  var transaction = new Transaction();
  transaction.debit(500);
  account.statementInsert(transaction);

  expect(account.balance).toEqual(1500);
});

test('withdraw multiple times from bank account', () => {
  var account = new Account();

  var transaction = new Transaction();
  transaction.credit(2000);
  account.statementInsert(transaction);

  var transaction = new Transaction();
  transaction.debit(500);
  account.statementInsert(transaction);

  var transaction = new Transaction();
  transaction.debit(250);
  account.statementInsert(transaction);

  expect(account.balance).toEqual(1250);
});

// Given I am a bank account holder
// When I make a withdrawal or deposit
// Then the statement saves the transaction amount, date and balance

describe ('account saves transaction in statement', () => {

  beforeEach(() => {
  });

  test('account statement transaction contain amounts', () => {
    var account = new Account();

    var transaction = new Transaction();
    transaction.credit(2000);
    account.statementInsert(transaction);

    var transaction = new Transaction();
    transaction.debit(500);
    account.statementInsert(transaction);
    expect(account.statement[1].getAmount()).toEqual(-500);
  });

  test('account statement transaction contain amounts', () => {
    var account = new Account();

    var transaction = new Transaction();
    transaction.credit(2000);
    account.statementInsert(transaction);

    var transaction = new Transaction();
    transaction.debit(500);
    account.statementInsert(transaction);
    expect(account.statement[1].getDate()).toEqual(new Date());
  });
});