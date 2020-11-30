// day 39_1
// 수식 최대화

function solution(expression) {
    let answer = [];
    const cases = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ] 
    
    for(let i = 0; i <cases.length; i++) {
        let arr = expression.split(/(\D)/)
        for(let j = 0; j<3; j++) {
            while(arr.includes(cases[i][j])) {
                let index = arr.indexOf(cases[i][j])
                arr.splice(index-1,3,(new Function(`return ${arr.slice(index-1,index+2).join('')}`))());
            }
        }
        answer.push(arr);
    }
    
    return Math.max(...answer.map(e => Math.abs(e)));
}