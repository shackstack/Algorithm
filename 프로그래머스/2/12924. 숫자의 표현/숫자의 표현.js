function solution(n) {
    let result = 0;
    
    for(let i = 1; i <= n/2; i++){
        let sum = i;
        for(let j = i+1; j<= Math.ceil(n/2); j++){
            sum += j;
            if(sum === n){
                result++;
                break;
            }
            if(sum > n) break;            
        };
    };
    
    return result + 1;
}