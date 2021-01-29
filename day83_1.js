// day 83_1
// 쿠키 구입

function solution(cookie) {
    var answer = 0;
    if (cookie.length <= 2)
    {
        if (cookie.length == 2 && cookie[0] == cookie[1])
        {
            answer = cookie[0];
        }
        return answer;
    }
    
    //이분탐색
    const len = cookie.length-1;
    for (let i = 0; i < len; i++) //경계선
    {
        let presum = cookie[i]; //첫째 총 과자갯수
        let preidx = i; //첫째 마지막에 추가한 바구니 위치
        let postsum = cookie[i+1]; //둘째 총 과자갯수
        let postidx = i+1; //둘째 마지막에 추가한 바구니 위치
        
        //경계선을 기준으로 idx가 0 || len에 도달할때 까지
        while (true)
        {            
            if (presum === postsum) //첫째 과자갯수===둘째 과자갯수인 경우
                answer = Math.max(presum, answer); //Max값인 경우에만 변수할당
            
            if (preidx > 0 && presum <= postsum) //둘째 과자갯수가 더 많은 경우, idx가 0이 될때까지 과자의 총합을 더한다.
            {
                preidx--;//첫째 바구니 하나 더 추가
                presum += cookie[preidx];//첫째 과자갯수 총합에 더하기
            }
            else if (postidx < len && presum >= postsum) //첫째 과자갯수가 더 많은 경우, idx가 len이 될때까지 과자의 총합을 더한다.
            {
                postidx++;//둘째 바구니 하나 더 추가
                postsum += cookie[postidx];//둘째 과자갯수 총합에 더하기
            }
            else //첫째 || 둘째의 바구니 위치가 0 || len에 도달한 경우 loop break
                break;
        }
    }
    return answer;
}