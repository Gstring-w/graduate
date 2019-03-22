const postTaskService = require("../service/postTaskService");

function postTaskWeb(req, res) {
  const { title, isTeacher } = req.query;
  const arr = [isTeacher, title];
  postTaskService(arr, res);
}

module.exports = postTaskWeb;
