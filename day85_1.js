// day 85_1
// 짝수 행 세기

function solution(A) {
    for(var i=0; i<A.length; i++) {
        var count = 0;
        var index = A.indexOf(A[i]);
        
        while(index > -1) {
        count++;
        A.splice(index, 1)
        index = A.indexOf(A[i])
        console.log(A[i], count)
        }
    }
}