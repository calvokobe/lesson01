const num = Number(process.argv[2])
if (num > 1 && num < 5){
    console.log("春");
} else if (num > 4 && num < 8){
    console.log("夏");
} else if (num > 7 && num < 11){
    console.log("秋");
} else {
    console.log("冬")
}  