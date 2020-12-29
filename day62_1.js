// day 62_1
// 가장 긴 팰린드롬

function longest_palindrom(s) {
    for (let i = s.length; i >= 3; i--) {
      for (let j = 0; j <= s.length - i; j++) {
        let arrayToCompare = s.split('').splice(j, i);
        let a = arrayToCompare.reverse().join('');
        let b = arrayToCompare.reverse().join('');
        if (a === b) return a.length;
      }
    }
    return 1;
  }