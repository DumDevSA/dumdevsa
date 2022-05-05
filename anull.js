let status = true;

let message = (a,b)=>{
  
  return new Promise((ressolve,reject)=>{
    
switch (status) {
  
  case true:
    
    alert(ms)
    ressolve(msg(a,b))
    break;
  
  case false:
    reject('Promise not fulfilled!')
    break;
  
}
    
  })
}

message(4,7).then(()=>{
 alert(a*b);
})

