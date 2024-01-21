// GUI - graphical user interface
// for copying folders use.............. cp -r test test1

// res.status(411).json({
//     msg: "You have no bad kidneys"
// });

// arrow functions
const sum = (a,b)=>{
    return a+b;
}

console.log(sum(1,2));
// map function
let arr = [1,2,3,4,5];
let jj = arr.map((i)=>{
    return i*2;
});
console.log(jj);
// filter
let kk=arr.filter((i)=>{
    return i%2===0;
});
console.log(kk);

// str.startsWith("a"); ................returns true opr false

// forEach,reduce, destructing, spread operator