const arg1 = String(process.argv[2])
let minute = Number(arg1.substr(3, 2));
let hour = Number(arg1.substr(0, 2));

if (hour <= 23, minute <= 14) {
    minute = minute + 45;
    console.log(hour);
    console.log(minute);
} else {
    minute = (minute + 45) - 60;
    console.log(0);
    console.log(minute);
}
