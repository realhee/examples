// day1_2
// 정렬
// k번째 수

function solution(array, commands) {
    let newArr=[];
    for(let i=0; i<commands.length; i++){
        let arr =array.slice(commands[i][0]-1,commands[i][1]);
          arr.sort(function(a,b){
            return a-b;
        });
        newArr.push(arr[commands[i][2]-1]);
    }
      return newArr;
  }