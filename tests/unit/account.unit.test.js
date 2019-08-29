import Account from '../../app/account';
import Transaction from '../../app/transaction';

jest.mock('../../app/transaction');

describe('when a credit transaction is passed', () => {
  beforeEach(() => {
    Transaction.mockImplementation(() => {
      return {
        getAmount: () => 1000
      };
    });
  });
  
  test('the account balance increases by 1000 when the credit is 1000', () => {
    var transaction = new Transaction();
    var account = new Account();
    account.statementInsert(transaction)
    expect(account.balance).toEqual(1000);
  });

  test('the account balance increases by 2000 when two credit transactions of 1000 are passed', () => {
    var transaction = new Transaction();
    var account = new Account();
    account.statementInsert(transaction);
    account.statementInsert(transaction);
    expect(account.balance).toEqual(2000);
  })
});

describe('when a debit transaction is passed', () => {
  beforeEach(() => {
    Transaction.mockImplementation(() => {
      return {
        getAmount: () => -1000
      };
    });
  });

  test('the account balance decreases by 1000 when the debit is 1000', () => {
    var transaction = new Transaction();
    var account = new Account();
    account.statementInsert(transaction);
    expect(account.balance).toEqual(-1000);
  })
});

describe('transactions passed are saved in the statement', () => {
  test('the first statement\'s transaction credit is 750', () => {
    var transaction = new Transaction();
    var account = new Account();
    account.statementInsert(transaction)
    account.statementInsert(transaction)
    account.statementInsert(transaction)
    expect(account.statement.length).toEqual(3)
  });
});
