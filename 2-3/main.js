const arg1 = Number(process.argv[2])
if (arg1 < 24) {
    console.log(arg1);
} else {
    console.log(arg1 - (Math.floor(arg1 / 24) * 24))
} 
