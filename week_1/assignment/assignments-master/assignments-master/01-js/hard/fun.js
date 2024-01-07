// function bracket(value){
//     let st=value.lastIndexOf("(");
//     let end = value.indexOf(")");
    
//     if(st===-1||end===-1){
//       return value;
//     }
//     let subs=value.substring(st+1,end-1);
//     // subs=bodmas(subs);
//     // replace bracket ke andar ka with our subs
//     console.log("aa gye aandar boss");
//     value= value.substring(0,st-1)+subs+value.substring(end+1,value.length);
//     bracket(value);
//     // return value;
//     }

function findLastOp(value,idx){
  idx=idx-1;
  // console.log(idx);
 while(value[idx]!=='+'&&value[idx]!=='-'&&value[idx]!=='*'&&value[idx]!=='/'&& idx>0){
  
 idx=idx-1;
  
 }
return idx;
}

function findNextOp(value,idx){
  idx=idx+1;
  while(value[idx]!=='+'&&value[idx]!=='-'&&value[idx]!=='*'&&value[idx]!=='/'&& idx<value.length-1){
  idx=idx+1;
  }
  return idx;
}

function bodmas(value){
        // follow order  ==>   / > * > + > -  10+2*6-4+1/2+7..........make it read 2 digit no.
      while(value.indexOf("/")!==-1){
        let idx=value.indexOf("/");
        let last=findLastOp(value,idx);
        let next=findNextOp(value,idx);
        console.log(last);
        let n1=0;
        let n2=0;
        let digitsL=idx-last;
        let digitsR=next-idx
        if(last===0){
          //console.log(value.slice(last,digitsL));
          n1=parseInt(value.slice(last,digitsL));
        }else{
          n1=parseInt(value.substring(last+1,idx-1));
        }
        if(next===value.length-1){
           n2=parseInt(value.substring(idx+1,digitsR));
        }else{
          n2=parseInt(value.substring(idx+1,next-1));
        }
        //console.log(n1);
        
        
        let ans=n1/n2;
        value= value.substring(0,last-1)+ans.toString()+value.substring(next,value.length-next+1);
        console.log(ans);
      }
      
      // while(value.indexOf("*")!==-1){
      //   let idx=value.indexOf("*");
      //   let n1=parseInt(value[idx-1]);
      //   let n2=parseInt(value[idx+1]);
      //   let ans=n1*n2;
      //   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
      // }
      
      // while(value.indexOf("+")!==-1){
      //   let idx=value.indexOf("+");
      //   let n1=parseInt(value[idx-1]);
      //   let n2=parseInt(value[idx+1]);
      //   let ans=n1+n2;
      //   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
      // }
      
      // while(value.indexOf("-")!==-1){
      //   let idx=value.indexOf("-");
      //   let n1=parseInt(value[idx-1]);
      //   let n2=parseInt(value[idx+1]);
      //   let ans=n1-n2;
      //   value= value.substring(0,idx-2)+ans+value.substring(idx+2,value.length);
      // }
      return value; 
      }

console.log(bodmas("22/2"));