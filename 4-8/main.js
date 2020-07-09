let counts1 = 0
let counts2 = 0
const str = "こはるはるここはるここはるはるここはるこはるはるはる"
for (let a = 0; a < str.length; a++) {
    if (str[a] === 'こ' && str[a + 1] === 'は' && str[a + 2] === 'る') {
        counts1++;
    }
    if (str[a] === 'は' && str[a + 1] === 'る' && str[a + 2] === 'こ') {
        counts2++;
    }
}
console.log(`こはる:${counts1}`);
console.log(`はるこ:${counts2}`);