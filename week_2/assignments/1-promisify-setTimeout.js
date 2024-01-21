/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    console.log("hlo ji..")
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(2912);
        },n*1000);
        
    })
}

async function jj(n){
    let j= await wait(n);
    console.log(j);
    console.log("babudaaa")
}
console.log(jj(5));