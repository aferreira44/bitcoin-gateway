var bitcoin = require("bitcoin")

var client = new bitcoin.Client({
	user: "bitcoinrpc",
	pass: "p0ssw0rd",
	host: "127.0.0.1",
	port: "18332"
});

client.getAccountAddress("", function(error, response){
	console.log(error ? error : response);
});

client.getInfo(function(error, info){
	console.log(error ? error : info);
});
