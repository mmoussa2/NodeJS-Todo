var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt' );

//first method:
myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
})

//another method to read write stream:
myReadStream.pipe(myWriteStream);