//this way much better
// module.exports.counter = function (arr) {
//   return 'There are ' + arr.length;
// };


var counter  = function(arr){
  return 'There are ' + arr.length;
 };



 var adder = function(a,b){
   return `the sum is ${ a + b }`;
 }

 

// module.exports = { counter, adder} ; 
// or:
module.exports.counter = counter;
module.exports.add = adder;

module.exports ={
  counter,
   add: adder
}