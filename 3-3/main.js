const arg1 = process.argv[2]

for(let i=0; i<arg1; i++){
    const array = []
    for(let j=0; j<arg1-(i+1); j++){
        const result1 = (" ");
        array.push(result1);
    }
    for(let k=0; k<(i+1)*2-1; k++){
        const result2 = ("*");
        array.push(result2); 
    }
    console.log(array.join(""));
}