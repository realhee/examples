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