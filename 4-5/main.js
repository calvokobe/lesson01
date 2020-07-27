const args = process.argv.slice(2);
const array = []
for (let a = 1; a < 9999; a++) {
    for (let b = 0; b < args.length; b++) {
        if ((a) == args[b]) {
            array.push(args[b]);
        }
    }
};
console.log(array);

