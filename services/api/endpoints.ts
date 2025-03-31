const authEndpoints = new (class {
  signIn = "account/login/";
  signUp = "account/register/";
  user = "account/user/";
  cards = "account/cards/";
  cardDetail = (id: number) => `account/cards/${id}/`;
})();

const paymentEndpoints = new (class {
  categories = "payment/category-datas/";
  create = "payment/create-transaction/";
})();

const transactionEndpoints = new (class {
  transactions = "payment/transactions/";
  savedTransactions = "payment/saved-transactions/";
  details = (id: number) => `payment/transactions/${id}`;
  save = (transaction_id: number) => `payment/transactions/${transaction_id}/toggle-save/`;
})();

const billProcessingEndpoints = new (class {
  scanBill = "payment/scan-bill/";
  scanQR = "payment/scan-qr/";
})();

const notificationsEndpoints = new (class {
  notifications = "core/notifications/";
})();

export { authEndpoints, paymentEndpoints, transactionEndpoints, billProcessingEndpoints, notificationsEndpoints };
