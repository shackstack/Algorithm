function solution(n, k) {
    let answer = 0;
    const rest = [];
    
    while(n > 0){
        rest.push(n % k);
        n = Math.floor(n / k);
    };
    
    const trans = rest.reverse().join('').split('0').filter((v) => v !== '').map((v) => Number(v)); 
    const primeMap = new Map();
    
    trans.forEach((v) => {
        if(v === 1) return;
        if(primeMap.has(v)){
            answer++;
            return;
        }
        for(let i=2; i <= Math.sqrt(v); i++){
            if(v % i === 0) return;
        };
        
        primeMap.set(v, true);
        answer++;
    });
    
    return answer;
}