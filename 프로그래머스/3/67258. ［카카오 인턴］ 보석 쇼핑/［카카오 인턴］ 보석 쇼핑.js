function solution(gems) {
    const minGemsNum = new Set(gems).size;
    
    let l = 0;
    let r = 0;
    const gemMap = new Map();
    let result = [1, gems.length];
    gemMap.set(gems[0], 1);
    
    while(r < gems.length){
        if(gemMap.size === minGemsNum){
            if(result[1]-result[0] > r - l){
                result = [l+1, r+1];
            };
            if(gemMap.get(gems[l]) > 1){
                gemMap.set(gems[l], gemMap.get(gems[l]) - 1);
            } else if(gemMap.get(gems[l]) === 1){
                gemMap.delete(gems[l]);
            };
            l++;
            continue;
        };
        r++;
        if(!gemMap.has(gems[r])) {
            gemMap.set(gems[r], 1);
            continue;
        }
        gemMap.set(gems[r], gemMap.get(gems[r])+1)
    }
    
    return result;
}