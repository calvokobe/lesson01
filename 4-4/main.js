const randoms = [];
const min = 0, max = 9;
 
for(i = min; i <= max; i++){
  while(true){
    const tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}
 
function intRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randoms.join(' '))