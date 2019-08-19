const isIn = (str, val) => {
  let counter = 0;
  for(let i=0; i < str.length; i++){
    for(let j=0; j < val.length; j++){
      if(str[i + j] !== val[j]){
        break;
      }
      if(val.length-1 === j){
        counter +=1;
      }
    }
  }
  return counter;
}
