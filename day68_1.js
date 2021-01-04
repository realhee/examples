// day 68_1
// 야근 지수

const solution = (n, works) => {
    const sortedWorks = [...works].sort((a, b) => b - a);
  
    let index = 0;
    while (n > 0) {
      if (sortedWorks[index] < sortedWorks[index + 1]) {
        index += 1;
        continue;
      }
  
      if (sortedWorks[index - 1] === sortedWorks[index]) {
        index = 0;
        continue;
      }
  
      sortedWorks[index] -= 1;
      n -= 1;
    }
    
    return sortedWorks.reduce((acc, cur) => cur > 0 ? acc + (cur ** 2) : acc, 0);
  };