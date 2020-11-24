// day 33_1
// [1차] 뉴스 클러스터링

function solution(str1, str2) {
    var answer = 1
  
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    
    // 첫번째 글자 영문자 넣을 배열
    var arr1 = []
    // 두번째 글자 영문자 넣을 배열
    var arr2 = []
  
    // 두글자씩 짜르는데 영문자 아닌 것이 있으면 넘어간다.
    for (var i = 0; i < str1.length - 1; i++) {
      var tmp = str1.slice(i, i + 2)
      if (tmp.search(/[^A-Z]/g) >= 0) {
        continue
      }
      arr1.push(tmp)
    }
    for (var i = 0; i < str2.length - 1; i++) {
      var tmp = str2.slice(i, i + 2)
      if (tmp.search(/[^A-Z]/g) >= 0) {
        continue
      }
      arr2.push(tmp)
    }
    
    arr1.sort()
    arr2.sort()
  
    var a = [] // 중복포함, 교집합 배열 (multi set)
    var b = [] // 중복포함, 합집합 배열
  
    for (var i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) >= 0) {
        a.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
      }
      b.push(arr2[i])
    }
  
    for (var i = 0; i < arr1.length; i++) {
      b.push(arr1[i])
    }
  
    // 계속 13번 테스트케이스가 안되서 애먹었었는데
    // 이렇게 분모가 0이 될경우, 분자가 0이될 경우 따로 분리해줘야함!!!
    if (b.length === 0) return 65536
    if (a.length === 0) return 0
  
    return Math.floor((a.length / b.length) * 65536)
  }