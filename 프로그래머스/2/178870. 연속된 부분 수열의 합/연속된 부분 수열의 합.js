function solution(sequence, k) {
    let l=0;
    let r=0;
    let sum = sequence[0];
    let result = [0, sequence.length-1];
    
    while(r < sequence.length){
        if(sum === k){
            if(result[1] - result[0] > r - l){
                result = [l, r];
            }
            r++;
            sum += sequence[r];
        } else if(sum > k){
            sum -= sequence[l];
            l++;
        } else if(sum < k) {
            r++;
            sum += sequence[r];
        };
    };
    
    return result;
}