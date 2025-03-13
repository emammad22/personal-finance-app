const authEndpoints = new (class {
  signIn = "account/login/";
  signUp = "account/register/";
  user = "account/user/";
})();

const paymentEndpoints = new (class {
  categories = "payment/category-datas/";
  create = "payment/create-transaction/";
})();

const transactionEndpoints = new (class {
  transactions = "payment/transactions/";
  savedTransactions = "payment/saved-transactions/";
  save = (transaction_id: number) => `payment/transactions/${transaction_id}/toggle-save/`;
})();

export { authEndpoints, paymentEndpoints, transactionEndpoints };
