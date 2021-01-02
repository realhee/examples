// day 67_1
// 방문 길이

function solution(dirs) {
    let answer = [];
    let gps = [0,0];
    dirs.split("").forEach((value) => {
        let ret = false;
        const pre_gps = gps.concat();
        if (value == "U" && gps[1] < 5)
        {
            gps[1] += 1;
            ret = true;
        }
        else if (value == "D" && gps[1] > -5)
        {
            gps[1] -= 1;
            ret = true;
        }
        else if (value == "R" && gps[0] < 5)
        {
            gps[0] += 1;
            ret = true;
        }
        else if (value == "L" && gps[0] > -5)
        {
            gps[0] -= 1;
            ret = true;
        }
        //길은 양뱡향이 아닌 단방향으로 취급("L,R" => ret : 1)
        const filter = answer.filter(item => {
            return item[0] == pre_gps[0] && item[1] == pre_gps[1] && item[2] == gps[0] && item[3] == gps[1] || item[0] == gps[0] && item[1] == gps[1] && item[2] == pre_gps[0] && item[3] == pre_gps[1]
        })
        if (ret && filter.length == 0)
            answer.push(pre_gps.concat(gps));
    });
    
    return answer.length;
}