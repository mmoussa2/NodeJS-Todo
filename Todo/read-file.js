//var fs = require('fs');

//sync:
//var readMe = fs.readFileSync('file.txt', 'utf8' ); // block the code until it execute
//console.log(readMe);
//fs.writeFileSync('newFile.txt', readMe); //second param is data



//async: bec async so we need a callback function to execute after file finish reading
// fs.readFile('file.txt', 'utf8', function(err, data){
//   // console.log(data);
//   fs.writeFile('newFile.txt', data, function(err, result){
//     if(err) console.log('err', err);
//   });
// });


//Delete Directory:
// fs.unlink('newFile.txt',(err)=>{
//   if(err) console.log(err);
//   else console.log('deleted successfully');
// });


//create Directory: Sync
// fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

//create directory Asyn:

// fs.mkdir('test', ()=>{
//   fs.readFile('file.txt','utf8', (err, data)=>{
//     fs.writeFile('./test/newFile.txt', data, (err,result)=>{
//       if(err) console.log(err);
//       else console.log('create directory and write to file successfully')
//     })
//   })
// })

//delete file first before deleting directory
// fs.unlink('./test/newFile.txt', err=>{
//   if (err) console.log(err);
//   else{
//     fs.rmdir('test', err => {
//       if (err) console.log(err);
//       else console.log('removed succ');
//     })
//   } 
// })





