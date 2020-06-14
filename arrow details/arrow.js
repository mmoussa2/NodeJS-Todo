function setUp(){
  // var can = document.createElement('canvas');
  // var body = document.getElementsByTagName("body")[0];

  // body.appendChild(can);
  var can= document.getElementById("can");

  can.width = 300;
  can.height = 400;
  can.style.border = "1px solid red";
  can.style.backgroundColor = "red"

  btn = document.getElementById("btn");
  // btn.onclick = changeBackGround;

//first method:
//   btn.addEventListener('click', changeBackGround )

//  function changeBackGround(){
//    can.style.backgroundColor = "blue";
//  }

//Second Method:
// btn.addEventListener('click', ()=>can.style.backgroundColor="green")


}

setUp();


// class Counter{
//   constructor(count){
//   this.count = count;
//   this.p = document.getElementById('par');
//   this.btn = document.getElementById('btn');

//   this.btn.addEventListener('click', ()=>{
//     this.count++;
//     this.p.innerHTML = this.count;
//   });
// // setInterval( ()=>{
//   //     this.count++;
//   //     this.p.innerHTML = this.count;
//   //   },500)
    
//   }

//   //  countIt(){
//   //   this.p.innerHTML = this.count;
//   // }
// }


// function calledClass(){
//   const counter1 = new Counter(0);

//   // counter1.countIt();
// }

// calledClass();

class Counter {
  constructor(count) {
    this.count = count;
    this.p = document.getElementById('par');
    this.btn = document.getElementById('btn');
  }

  start(){
      this.btn.addEventListener('click', () => {
        this.countIt();
    });
  }

  countIt(){
    this.count++;
    this.p.innerHTML = this.count;
  }
}

const counter1 = new Counter(0);
counter1.start();


