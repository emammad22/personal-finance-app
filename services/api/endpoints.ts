const authEndpoints = new (class {
  signIn = "account/login/";
  signUp = "account/register/";
  user = "account/user/";
})();

const paymentEndpoints = new (class {
  categories = "payment/category-datas/";
  create = "payment/create-transaction/";
})();

export { authEndpoints, paymentEndpoints };
