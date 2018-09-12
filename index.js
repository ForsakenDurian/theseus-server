express = require("express")
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static('public'))

io.on('connection', function (socket) {
    socket.emit('auth', 'pls');
    socket.on('authenticate', function (data) {
      console.log(data);
      smthing.redirect('https://github.com/')
    });
});

http.listen(3000, function() {
  console.log("listening on port 3000");
});
