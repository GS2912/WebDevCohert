// const fs=require("fs");
// // async functions.....when thread is free,then it will return to the pending callbacks
// //another e.g. setTimeOut
// fs.readFile("./a.txt","utf-8", function(err,data){
//     console.log(data);
// });
// console.log("u win sir.");
// async function, sync ko todte hai, they keep the main thread moving, and puts the task into callback queue which is seen , when the main thread becomes free
// single threaded nature but context switching and task delgation is allowed
// real use of callbacks, to implement async functions....
// js browser architecture..........event loop, call stack, web APIs, callback queue

//PROMISES
//Promises are syntactical sugar that make this code slightly more readable
// promise object when resolved with .then() , it sends a callback function into the queue...without any async logic yet
// 

// ASYNC?AWAIT
// direct syntax, which retrieves directly the value sent from the resolve....without any .then() vagera....
// same as promises general behaviour....callback queue mei dal deta hai
// used on caller side...
// in mongo DB promises are returned and we use async/await to resolve them....remember

function jj(){
    let p = new Promise(function(resolve){
      resolve(8);
});
return p;
}

async function kk(){
    let k = await jj();
console.log(k);
console.log("andar bhai");
}
kk();
// console.log(jj().then());
// //console.log(p); // promise ("8")
// jj().then((data)=>{
//     console.log("mei hu bhaii");
//     console.log(data);
// });
console.log("babudaa");