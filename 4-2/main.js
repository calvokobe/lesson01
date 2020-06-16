const fs = require("fs");
fs.readFile("./error.log", "utf-8", (err, data) => {
  if (err) throw err;
  var result = data.split('\n');
  for (let i=0; i<3; i++){
    console.log(result[i].substr(6,21))
  }  
});