const authEndpoints = new (class {
  signIn = "account/login/";
  signUp = "account/register/";
  user = "account/user/";
})();

export { authEndpoints };
