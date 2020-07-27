for (let a=1; a<=9; a++){
    const array = []
    for (let b=1; b<=9; b++){
        const result = a*b
        array.push(result);
    }

console.log(array.join('\t'))
}