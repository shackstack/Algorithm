function solution(n) {
    let result = 0;
    let sum = 1;
    let left = 1;
    let right = 1;
    
    while(left <= n/2 && right <= n/2 + 1){
        if(sum >= n){
            if(sum === n){
                result++;
            }
            sum -= left;
            left++;
        }else{
            right++;
            sum += right;
        };
    };
    
    return result + 1;
}