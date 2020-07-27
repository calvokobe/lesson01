const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60]
const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < students.length; i++) {
    array[Math.floor(students[i] / 10)]++
}

for (let j = Math.max(...array); j > 0; j--) {
    const box = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= j) {
            box.push("*");
        } else {
            box.push(" ");
        }
    }
    console.log(box.join("  "));
}

console.log("--------------------------------")
console.log("0 10 20 30 40 50 60 70 80 90 100")
