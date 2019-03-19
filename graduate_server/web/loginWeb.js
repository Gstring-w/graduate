const loginService = require("../service/loginService");

function loginWeb(req, res) {
  const { username, password } = req.query;
  const params = { username, password };

  loginService(params, res);
}

module.exports = loginWeb;
