onst arg1 = String(process.argv[2])
const arg2 = String(process.argv[3])

const str1 = arg1
const str2 = arg2

const result1 = str1.substr( 2, 1 );
const result2 = str1.substr( 1, 1 );
const result3 = str1.substr( 0, 1 );

const result4 = str2.substr( 2, 1 );
const result5 = str2.substr( 1, 1 );
const result6 = str2.substr( 0, 1 );

console.log(Number(result1+result2+result3) + Number(result4+result5+result6));