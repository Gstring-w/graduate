const app = require("express")();
const server = require("http").Server(app);
const multer = require("multer");
const upLoad = multer({ dest: "./file" });
const messageService = require("./service/messageService");
const web = require("./web");
const bobyParser = require("body-parser");
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
messageService(server);

app.listen(80, () => {
  console.log("毕业系统后端已启动！");
});
//启动webSocket

app.get("/info", web.getInfoWeb); //?userid=1111; 根据登陆信息提供 选题信息 老师
app.get("/message", web.messageWb); // ?fromid=123&toid=123
app.get("/allTask", web.getAllTaskWeb);
// 文件上传
app.post("/upload", upLoad.single("file"), web.upLoadWeb);
// 数据接口

app.post("/login", bobyParser.json(), web.loginWeb);
app.get("/PostTask", web.postTaskWeb); //{ title:title,isTeacher:"false"}
