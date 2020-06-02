var events = require('events'); //return an event emitter, which is constructor
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent', 'event fired');


