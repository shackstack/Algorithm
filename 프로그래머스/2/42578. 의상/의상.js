function solution(clothes) {
    const hashMap = new Map();
    
    clothes.forEach(([value,key])=>{
        if(!hashMap.has(key)){
            hashMap.set(key,[value]);
            return;
        };
        hashMap.set(key, [...hashMap.get(key), value]);
    });
    
    const arr = [...hashMap].map(([key,value]) => value.length + 1);
    return arr.reduce((a,b) => a * b ) - 1;
}