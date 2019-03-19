function messageService(app) {
  var io = require("socket.io")(app);
  io.on("connection", function(socket) {
    //学生
    socket.on("message-student", function(data) {
      //此处to应该是具体老师，在前端发送的data里面添加一个老师id
      io.emit("message", { roly: "student", to: "teacher", data: data });
    });

    socket.on("message-college", function(data) {
      io.emit("message", { roly: "student", to: "college", data: data });
    });

    socket.on("message-root", function(data) {
      io.emit("message", { roly: "student", to: "root", data: data });
    });

    //老师发给学生
    socket.on("message-teacher", function(data) {
      io.emit("message", { roly: "teacher", to: "student", data: data });
    });
  });
}
module.exports = messageService;
