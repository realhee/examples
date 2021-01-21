// day 80_1
// 선입 선출 스케줄링

function solution(n, cores) {
    if (n <= cores.length) {
      return n;
    } else {
      let answer = 0;
      let remain = n - cores.length;
      const workReducer = works => {
        let min = Math.min.apply(null, works);
        let newWorks = [];
        for (let i = 0; i < works.length; i++) {
          if (works[i] === min) {
            if (remain === 1) {
              answer = i + 1;
              return;
            }
            remain--;
            newWorks.push(cores[i]);
          } else {
            newWorks.push(works[i] - min);
          }
        }
        workReducer(newWorks);
      };
      workReducer(cores);
      return answer;
    }
  }