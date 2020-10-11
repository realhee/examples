// day6_8
// [1차] 비밀지도 - 이진수 바꾸기 : toString(2)

function solution(n, arr1, arr2) {
    var answer = [];
    var temp = [];
    
    for(var i=0; i<n; i++){
      var e1 = arr1[i].toString(2);
      var e2 = arr2[i].toString(2);
  
      if(e1.length < n) {
        const add = n-e1.length;
        for(var j=0;j<add;j++){
          e1 = '0'+e1;
        }
      }
      if(e2.length < n) {
        const add = n-e2.length;
        for(var j=0;j<add;j++){
          e2 = '0'+e2;
        }
      }
      
      for(var j=0; j<n; j++){
        if((e1[j] === '0')&&(e2[j] === '0')){
          temp[j] = ' '; 
        }else{
          temp[j] = '#';
        }
     } 
      var str = temp.join('');
      answer.push(str);
    }
  
      return answer;
  }