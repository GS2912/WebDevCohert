// let,const,if-else, for-loops...
// array
let arr=[1,2,3,4,5];
//objects
const user={
    fname:"Garv",
    lname:"soni",
    age:18,
    qualities: {
        leadership:10,
        physique:10,
        strength:10
    }
}
console.log(user["age"]);
console.log(user.qualities.physique);

//array of objects

// functions
function sum(a,b){
    console.log(a+b);
    
}
function mul(a,b){
    return a*b;
}
sum("We go ", "gYm");

// callbacks..........passing functions as an argument
function jj(a,b, fun){
    console.log(fun(a,b));
}

jj(2,4,mul);
// setTimeout
function greet(){
    console.log("Oye papa ji...")
}
setTimeout(greet,5*1000);
setInterval(greet,1*1000);