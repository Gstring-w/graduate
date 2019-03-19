var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(80);

function handler(req, res) {
  res.writeHead(200);
  res.end();
}

io.on("connection", function(socket) {
  //学生
  socket.on("message-student", function(data) {
    console.log(data);
    io.emit("message", { roly: "student", data: data });
  });
  //老师发给学生
  socket.on("message-teacher", function(data) {
    console.log(data);
    io.emit("message", { roly: "teacher", data: data });
  });
});
