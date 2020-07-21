// "はるこ"の数と"こはる"の数を取得する。ただしStringクラスのメソッドを使わずに実装すること。

// const str = "こはるはるここはるここはるはるここはるこはるはるはる"

// 出力結果：
// こはる:5
// はるこ:4


// let counts1 = 0
// let counts2 = 0
// const str = "こはるはるここはるここはるはるここはるこはるはるはる"
// for (let a = 0; a < str.length; a++) {
//     if (str[a] === 'こ' && str[a+1] ==='は' && str[a+2] ==='る'){
//         counts1 ++;
//         }
//     if (str[a] === 'は' && str[a+1] ==='る' && str[a+2] ==='こ'){
//         counts2 ++;
//         }
//      }
//     console.log(`こはる:${counts1}`);
//     console.log(`はるこ:${counts2}`);


// どんな文字列を探す場合にも対応できるようなコードになおしてください！

// <中井の例>
// for()//探される文字列の回数
// 　 for()//探したい文字列の回数
// 　　if()//探したい文字と探されたい文字が一致しないものがひとつでもあればbreak
// 　　flag++ //if文の条件に当てはまらない時はcntの数をインクリメント
// if(flag == 探したい文字の長さ)
// 　cnt++ //この条件式が当てはまる数をカウントする

function strSearch(text, search) {
    let count = 0
    for (let i = 0; i < text.length; i++) {
        let k = i
        let flag = 0
        for (j = 0; j < search.length; j++) {
            if (text[k++] != search[j]) {
                break
            }
            flag++
        }
        if (flag === search.length) {
            count++
        }
    }
    return count
}

search = ["こはる", "はるこ"]
for (let i = 0; i < search.length; i++) {
    let length = strSearch("こはるはるここはるここはるはるここはるこはるはるはる", search[i])
    console.log(`${search[i]}:${length}`)
}