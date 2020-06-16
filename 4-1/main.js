const arg1 = Number(process.argv[2])
const arg2 = Number(process.argv[3])
const arg3 = Number(process.argv[4])
const arg4 = Number(process.argv[5])
const arg5 = Number(process.argv[6])

let array = [arg1, arg2, arg3, arg4, arg5]
array.sort( (a,b) =>  a-b  );
console.log(array[2])
