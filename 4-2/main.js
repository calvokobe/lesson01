for (let i = 0; i<=50; i++){
    const str = i.toString()
    if ((i % 3) == 0 || str.match(/3/)){ 
    console.log("WOW");
    } else {
    console.log(i);
    }
}