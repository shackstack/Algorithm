function solution(nums) {
    const hashMap = new Map();
    const countsICanGet = nums.length / 2
    
    nums.forEach((num)=>{
        if(!hashMap.has(num)) hashMap.set(num, 0);
        
        hashMap.set(num, hashMap.get(num) + 1);
    });
    
    return hashMap.size > countsICanGet ? countsICanGet : hashMap.size
}