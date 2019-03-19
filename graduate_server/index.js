const app = require("express")();
const server = require("http").Server(app);
const messageService = require("./service/messageService");
const web = require("./web");

//启动webSocket
messageService(server);

// 数据接口

app.post("/login", web.loginWeb);

app.listen(80, () => {
  console.log("毕业系统后端已启动！");
});
