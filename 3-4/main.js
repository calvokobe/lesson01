const str1 = String(process.argv[2])
const str2 = String(process.argv[3])

function reverseString(str1, str2) {
  return str1.split("").reverse().join("");
  return str2.split("").reverse().join("");
}
reverseString(str1);
reverseString(str2);

console.log(Number(reverseString(str1)) + Number(reverseString(str2)));