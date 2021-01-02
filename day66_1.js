// day 66_1
// 불량 사용자

let result = 0;
const memo = [];

function solution(user_id, banned_id) {
    const banned_list = banned_id.map(bannedId => bannedId.replace(/\*/g,'.'));
    const visit = [...user_id].fill(false);
    dfs(user_id, banned_list,0, 0, visit);
    return result;
}

function dfs(user_id, banned_id, idx, n, visit){
    const visited = [...visit];
    const regex = RegExp(`\^${banned_id[idx]}\$`);
    
    if(n === banned_id.length){
        const temp = [];
        visited.forEach((v,i) => v && temp.push(user_id[i]));
        
        let cnt = 0;
        memo.forEach(array => {
            let flag;
            for(let i = 0 ; i < temp.length ; i++){
                flag = array.some(element => element === temp[i]);
                if(!flag){
                    break;
                }
            }
            !flag && cnt++;
        });
        if(cnt === memo.length){
            memo.push(temp);
            result++;
        }
        return;
    }
    
    user_id.filter((id, index) => {
        if(regex.test(id)){
            if(!visited[index]){
                visited[index] = true;
                dfs(user_id, banned_id, idx+1, n+1, visited);
                visited[index] = false;
            }
        }
    });
}