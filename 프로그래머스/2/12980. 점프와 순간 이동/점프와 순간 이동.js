function solution(n) {
    let result = 1;
    
    while(n !== 1) {
        if (n % 2 === 1) {
            result ++;
        };
        n = Math.floor(n / 2)
    };
    
    return result;
}