const math = require("mathjs");
const array = []
for (let i = 2; i < process.argv.length; i++) {
    array.push(process.argv[i])
}
const result = math.median([array]);
console.log(result)