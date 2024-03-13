function solution(numbers, target) {
    const binaryPermu = [];
    
    for(let i=0; i<2**numbers.length; i++){
        const arr = i.toString(2).split('')
        while(arr.length !== numbers.length){
            arr.unshift('0')
        }
        binaryPermu.push(arr);
    }
    
    const permu = binaryPermu.map((arr)=>{
        return arr.map((v,i)=>{
            if(v === '0') return numbers[i] * 1;
            if(v === '1') return numbers[i] * -1;
        }).reduce((a,b)=>a+b);
    });
    
    const hashMap = new Map();
    
    permu.forEach((v)=>{
        if(!hashMap.has(v)){
            hashMap.set(v,1);
            return;
        };
        hashMap.set(v, hashMap.get(v)+1);
    })
    
    return hashMap.has(target) ? hashMap.get(target) : 0;
}