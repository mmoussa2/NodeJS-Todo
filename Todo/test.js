// var time = 0;
// var timer = setInterval(function(){
//   time += 2;
//   console.log( time + " second");
//   if(time > 5){
//     clearInterval(timer);
//   }
  
// },  2000);

// console.log(__dirname);
// console.log(__filename);
//noramal function statement
function sayHi(){
  console.log('hi');
}
//sayHi();

//function expression
var sayBye = function(){
  console.log('Bye');
}
//sayBye();

function callFunction(fun){
  fun();
}

callFunction(sayBye);