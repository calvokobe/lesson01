
const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

for (let i = 0; i < 3; i++){
  const first  = errorLogs[i].indexOf(':');
  const second  = errorLogs[i].indexOf('-');
  console.log(errorLogs[i].substring(first +1, second))
};
