function solution(prices) {
    return prices.map((v, i, origin)=>{
        if(i === prices.length -1) return 0;
        
        let seconds = 0;
        
        for(let j=i+1; j<prices.length; j++){
            if(prices[j] - v < 0){
                return seconds + 1;
            }
            seconds++;
        };
        
        return seconds;
    });
}