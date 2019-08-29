import Account from '../../app/account';
import Transaction from '../../app/transaction'

jest.mock('../../app/transaction')

describe('when a credit transaction of 1000 is passed', () => {
    Transaction.mockImplementation(() => {
      return {
        getAmount: () => 1000
      };
    });

  test('the account balance increases by 1000', () => {
    var transaction = new Transaction();
    var account = new Account();
    account.statementInsert(transaction)
    expect(account.balance).toEqual(1000);
  });
});