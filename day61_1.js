// day 61_1
// 베스트앨범

function solution(genres, plays) {
    var list = genres.reduce((hash, g, i) => {
    if (!hash[g]) {
    hash[g] = {plays: plays[i], music: []};
    } else {
    hash[g].plays += plays[i];
    }
    hash[g].music.push([i, plays[i]]);
    return hash;
    }, {});
    var answer = [];
    var sorted = Object.values(list).sort((l, r) => r.plays - l.plays);
    sorted.forEach((g) => {
    if (g.music.length > 1) {
    g.music.sort((l, r) => {
    if (l[1] > r[1]) {
    return -1;
    } else if (l[1] < r[1]) {
    return 1;
    } else {
    return (l[0] > r[0]) ? 1 : -1;
    }
    });
    answer.push(g.music[0][0]);
    answer.push(g.music[1][0]);
    } else {
    answer.push(g.music[0][0]);
    }
    });
    return answer;
    }
