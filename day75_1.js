// day 75_1
// 배달

function solution(N, road, K) {
    const pq = new PriorityQueue();
    const adj = Array.from(Array(N + 1), () => new Array());
    const dist = [0, 0];

    for(let i = 0 ; i < N - 1 ; ++i) dist.push(Number.MAX_VALUE);
    
    road.map(info => {
        let a = info[0];
        let b = info[1];
        let c = info[2];
        
        adj[a].push({to: b, weight: c});
        adj[b].push({to: a, weight: c});
    });
    
    pq.push({
        to: 1,
        weight: 0
    });
    
    (function(){
        while(pq.length){
            let edge = pq.pop();
            adj[edge.to].map(next => {
               if(dist[next.to] > dist[edge.to] + next.weight){
                   dist[next.to] = dist[edge.to] + next.weight;
                   pq.push(next);
               } 
            });
        }
    })();
        
    let answer = 0;
    for(let i = 1 ; i < N + 1 ; ++i){
        if(dist[i] <= K) answer++;
    }
    
    return answer;
}

class PriorityQueue {
    constructor() {
        this.memory = [];
        this.length = 0;
    }
    
    push(newItem) {
        this.length++;
        
        let isAdded = false;
        
        for(let i = 0 ; i < this.memory.length ; ++i){
            if(this.memory[i].weight > newItem.weight){
                this.memory.splice(i, 0, newItem);
                isAdded = true;
                break;
            } 
        }        
        
        if(!isAdded) this.memory.push(newItem);
    }
    
    pop() {
        this.length--;
        return this.memory.shift();
    }

}

