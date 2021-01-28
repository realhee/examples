// day 77_1
// 무지의 먹방 라이브


function solution(food_times, k) {
    let sortFoodTimes = [];
    const len = food_times.length;

    sortFoodTimes = food_times.map((time, index) => {
        return {index:index+1, time};
        }).sort((a,b) => {
            return a.time - b.time;
    });
    
    for (let i = 0; i < len ; i++) {
        const food_time = sortFoodTimes[i].time; 
        const remains_foods_len = len - i;
        const roop_time = (food_time - (i == 0 ? 0 : sortFoodTimes[i-1].time)) * remains_foods_len; 
        
        if (k < roop_time) {
            return sortFoodTimes.slice(i).sort((a,b) => a.index - b.index)[k % remains_foods_len].index;
        }
        k -= roop_time;
    }
    
    return -1;
}


// 두 번째 풀이
/*
function solution(food_times, k) {
    if(food_times.length > k) return k+1

    const val = k / food_times.length,
          rest = k % food_times.length,
          timesSum = food_times.reduce((a, b) => a + b);
    
    if(timesSum <= k) return -1;
    
    let count = 0;
    for(let i=0;timesSum>i;i++) {
        const idx = i%food_times.length
        if(food_times[idx] > 0) {
            food_times[idx]--
            count++;
            if(count == k) return (food_times.length < idx+2 ? idx+2 - food_times.length : idx+2);
        }
    }
}
*/