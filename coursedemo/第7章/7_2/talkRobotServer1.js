var wss = require("websocket").server;
var http = require("http");
var server = http.createServer(function(request,response){

});
server.listen(9999, function(){});

wsServer = new wss({
	httpServer:server
});

wsServer.on("request",function(request){
	var connection = request.accept(null, request.origin);
	setInterval(function(){connection.sendUTF("send")},1000);
	connection.on("message",function(message){
		console.log("message recived!");
		if(message.type == "utf8"){
			if(message.utf8Data == "bye"){
				this.close();
			}
			returnMsg = (message.utf8Data in messageReturn)?messageReturn[message.utf8Data]:messageReturn['other'];
			connection.sendUTF(returnMsg);
		}
	});
	connection.on("colse",function(connection){

	});
});
console.log("server start");

var messageReturn = {
	"hello":"你好，地球人",
	"hi":"啊哼",
	"name":"我是机器人",
	"age":"1天了",
	"thanks":"Oh,no thanks",
	"other":"你说啥我也听不懂啊"
}
