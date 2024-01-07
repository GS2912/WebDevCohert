/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str=str.toLowerCase();
    arr=str.split("");
    let count=0;
    arr.array.forEach(element => {
      if(element==="a"||element==="e"||element==="i"||element==="o"||element==="u"){
        count=count+1;
      }
    });
    return count;
}

module.exports = countVowels;