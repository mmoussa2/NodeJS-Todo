//util : one of this is : allows inherit certain things from object build into nodejs

var events  = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person,events.EventEmitter); // so
//anytime make new person will have events.EventEmitter)

var majid = new Person('majid');
var moussa = new Person('moussa');
var people = [majid, moussa];

people.forEach((person)=>{
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg )
  });
});

console.log(majid.emit('speak', "i am majid"));
console.log(moussa.emit('speak', "hello , this is moussa"));


