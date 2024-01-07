/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a){
    this.result=this.result+a;
  }
  subtract(a){
    this.result=this.result-a;
  }
  multiply(a){
    this.result=this.result*a;
  }
  divide(a){
    this.result=this.result/a;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(string){
    let jj=string.toUpperCase();
        if(jj!==string){
          console.log("error!");
          return "error";
    } 
    let arr=string.split(" ");
    let arr2=arr.filter(function(item){
         return item!="";
        });
    let str2="";
    arr2.forEach(function(item){
        str2=str2+item;
    });

    return eval(str2);


    }
}

let momo =new Calculator();
let kk =momo.calculate(`10 +  abc`);
console.log(kk);


module.exports = Calculator;

// to check if string is valid
// let jj=str.toUpperCase();
// if(jj!==str){
//   console.log("error!");
// } 


// removing spaces

// // function to calculate and replace the brackets first
// function bracket(value){
// let st=value.lastIndexOf("(");
// let end = value.indexOf(")");

// if(st===-1||end===-1){
//   return value;
// }
// let subs=value.substring(st+1,end-1);
// subs=bodmas(subs);
// // replace bracket ke andar ka with our subs
// console.log("aa gye aandar boss");
// value= value.substring(0,st-1)+subs+value.substring(end-1,value.length);
// bracket(value);
// }


// function bodmas(value){
//   // follow order  ==>   / > * > + > -  10+2*6-4+1/2+7
// while(value.indexOf("/")===-1){
//   let idx=value.indexOf("/");
//   let n1=parseInt(value[idx-1]);
//   let n2=parseInt(value[idx+1]);
//   let ans=n1/n2;
//   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
// }

// while(value.indexOf("*")===-1){
//   let idx=value.indexOf("*");
//   let n1=parseInt(value[idx-1]);
//   let n2=parseInt(value[idx+1]);
//   let ans=n1*n2;
//   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
// }

// while(value.indexOf("+")===-1){
//   let idx=value.indexOf("+");
//   let n1=parseInt(value[idx-1]);
//   let n2=parseInt(value[idx+1]);
//   let ans=n1+n2;
//   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
// }

// while(value.indexOf("-")===-1){
//   let idx=value.indexOf("-");
//   let n1=parseInt(value[idx-1]);
//   let n2=parseInt(value[idx+1]);
//   let ans=n1-n2;
//   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
// }
// return value; 
// }
// //
// let str= "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
// let arr=str.split(" ");
// let arr2=arr.filter(function(item){
//   return item!="";
// });
// let str2="";
// arr2.forEach(function(item){
//   str2=str2+item;
// });
// console.log(str2);
// let kk=bracket(str2);
// let jjj=bodmas(kk);
// console.log(jjj);
