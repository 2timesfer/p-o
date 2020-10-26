var http = require('http');

//Create a server 
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the browser
  res.end(); //end the response
}).listen(8080); 

console.log('Server started');