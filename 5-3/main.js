const songs = require('./songs.json');
const playdata = require('./playdata.json');
playdata.data.sort((a, b) => {
    return b.count - a.count;
});
for (i = 0; i < playdata.data.length; i++) {
    let num = i + 1;
    const found = songs.songs.find((element) => {
        return Number(element.id) === Number(playdata.data[i].id);
    });
    console.log(`${num}位 ${found.title}\t${playdata.data[i].count}回`);
}