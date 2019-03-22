const getAllTaskService = require("../service/getAllTaskService");

function getAllTaskWeb(req, res) {
  getAllTaskService(res);
}

module.exports = getAllTaskWeb;
