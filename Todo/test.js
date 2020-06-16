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
// function sayHi(){
//   console.log('hi');
// }
//sayHi();

//function expression
// var sayBye = function(){
//   console.log('Bye');
// }
// //sayBye();

// function callFunction(fun){
//   fun();
// }

//callFunction(sayBye);

//var { counter, adder }  = require('./stuff');

// console.log(counter(['first', 'second', 'third']));
// console.log( adder(2,3));

//or:
// var stuff = require('./stuff');
// console.log(stuff)
// console.log(stuff.add(5, 6));
// console.log(stuff.counter(['1', '2']));

//or
// const {add, counter} = require('./stuff');
// console.log(add(5, 6));





// Array.prototype.forEach.call(appsMenuItems, function (el, i) {
//   if (0 == i) {
//     el.setAttribute('tabindex', '0');
//     el.addEventListener("focus", function () {
//       currentIndex = 0;
//     });
//   } else {
//     el.setAttribute('tabindex', '-1');
//   }
// });

// Array.prototype.forEach.call(subMenuItems, function (el, i) {
//   el.setAttribute('tabindex', '-1');
// });

//var Foo = {
//   *[Symbol.iterator](){
//     // for(let [idx, val] of this.nums.entries()){
//       let arr = [1,2,3];
//     for(let idx = 0 ; idx < arr.length ; idx++){
//       yield label =>
//       `${label} : ${arr[idx]} 
//       (${idx+1} / ${arr.length})`;
//     }
//   },
//   // bar([x = 1,y=2,...nums] = []){
//   //   this.nums=[x,y,...nums]
  
//   // }
// };

// //Foo.bar([10,20,30,40,50]);

// for(let f of Foo){
//   // console.log(f)
//   console.log(f("Foo"));
// }

let me ={
  name: "majid",
  thisInArrow: ()=>{
    console.log(`My name is ${this.name}`); //this is undefined
  },
  thisInRegular(){
    console.log(`name name is ${this.name}`); //this is work
  }
};

me.thisInRegular();