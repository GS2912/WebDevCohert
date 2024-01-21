function wait1(t) {
   
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(29);
        },t*1000);
        
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(12);
        },t*1000);
        
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(2004);
        },t*1000);
        
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    // const promise1 = wait1(t1);
    // const promise2 = wait2(t2);
    // const promise3 = wait3(t3);
  
    // return Promise.all([promise1, promise2, promise3])
    //   .then(() => {
    //     const endTime = Date.now();
    //     const totalTime = endTime - startTime;
    //     console.log('Total time taken:', totalTime, 'milliseconds');
    //     return totalTime;
    //   });

    return wait1(t1)
  .then((result1) => wait2(t2))
  .then((result2) => wait3(t3))
  .then((finalResult) => {
    console.log('Final result:', finalResult);
    const endTime = Date.now();
 const totalTime = endTime - startTime;
 return totalTime;
  })
}

// console.log(calculateTime(1, 2, 5));
calculateTime(1,2,5)
  .then((totalTime) => {
    console.log('Overall time taken:', totalTime, 'milliseconds');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
module.exports = calculateTime;