// day 84_1
// 지형 편집

function solution(land, P, Q) {
    const flattenLand = [].concat(...land);
    const max = Math.max(...flattenLand);
    const min = Math.min(...flattenLand);
    const totalArr = [];
    
    for (let height = min; height <= max; height++) {
        const total = flattenLand.reduce((acc, elem, i) => {
            const gap = elem - height;
            const price = gap * ((gap > 0)? Q : -P);
            return acc + price;
        }, 0);
  
        totalArr.push(total);
    }
    
    return Math.min(...totalArr);
  }