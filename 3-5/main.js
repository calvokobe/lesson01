const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i=0; i<students.length; i++){
if (students[i] > 0 && students[i] < 10){
    array[0]++
} else if (students[i] >= 10 && students[i] < 20){
    array[1]++
} else if (students[i] >= 20 && students[i] < 30){
    array[2]++
} else if (students[i] >= 30 && students[i] < 40){
    array[3]++
} else if (students[i] >= 40 && students[i] < 50){
    array[4]++
} else if (students[i] >= 50 && students[i] < 60){
    array[5]++
} else if (students[i] >= 60 && students[i] < 70){
    array[6]++
} else if (students[i] >= 70 && students[i] < 80){
    array[7]++
} else if (students[i] >= 80 && students[i] < 90){
    array[8]++
} else if (students[i] >= 90 && students[i] < 100){
    array[9]++
} else {
    array[10]++
}
}

for (let j=3; j>0; j--){
    const box = []
    for (let i=0; i<array.length; i++){     
        if (array[i] >= j){
            box.push("*");
        } else {    
            box.push(" ");
        } 
    }
    console.log(box.join("  "));
}

console.log("--------------------------------")
console.log("0 10 20 30 40 50 60 70 80 90 100")
