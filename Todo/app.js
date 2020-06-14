//create server:
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer((req, res)=>{
 
  
  
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('helloooooo123');

  //res.writeHead(200, { 'Content-Type': 'text/html' });
  // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // myReadStream.pipe(res);

 

  // we cannot write : res.end(res) => bec its just accept plain text or buffer
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // var obj = {
  //   name: 'majid',
  //   last: 'moussa'
  // };
  //res.end(JSON.stringify(obj));
  


// });

// server.listen(3000, '127.0.0.1');
// console.log('now is listening to port 3000');

// const express = require('express');
// const app = -();

// app.get('/', (req, res)=>{
//   res.send('home page')
// });

// const port = process.env.PORT || 5000;
// app.listen(port, ()=> console.log(`server is running on port ${port} `))

var http = require('http');

var server = http.createServer((req,res)=>{
  res.writeHead(200, {'ContentType': 'text/plain'});
  res.end('heyy majid')
});

server.listen(3000)