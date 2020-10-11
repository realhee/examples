// day6_6
// 직사각형 별찍기 - repeat

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var answer1 = "";
    var answer2 = "";

    for(var i=0; i < b; i++) {
        for(var j=0; j < a; j++) {
            answer1 += "*";
        }
        answer1 += "\n";
    }

    console.log(answer1);
});