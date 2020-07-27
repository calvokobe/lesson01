const arg1 = String(process.argv[2])
const arg2 = String(process.argv[3])
const small = arg1.toLowerCase()
const name = [];
const array = small.split(",")

for (let i = 0; i < array.length; i++) {
    if (array[i].includes(arg2.toLowerCase())) {
        name.push(array[i]);
    }
}

console.log(name.sort().join(' '));