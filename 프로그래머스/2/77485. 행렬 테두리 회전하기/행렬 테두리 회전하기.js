function solution(rows, columns, queries) {
    const result = [];
    const hashMap = new Map();
    let value = 1;
    
    for(let i=1; i<=rows; i++){
        for(let j=1; j<=columns; j++){
            hashMap.set(`${i}-${j}`, value);
            value++;
        };
    };
    
    for(let arr of queries){
        const [a1, b1, a2, b2] = arr;
        let curr = hashMap.get(`${a1}-${b1}`);
        let min = curr;
        
        for(let i=b1+1; i<=b2; i++){
            const temp = hashMap.get(`${a1}-${i}`);
            min = Math.min(temp, min)
            hashMap.set(`${a1}-${i}`, curr);
            curr = temp;
        };
        
        for(let i=a1+1; i<=a2; i++){
            const temp = hashMap.get(`${i}-${b2}`);
            min = Math.min(temp, min)
            hashMap.set(`${i}-${b2}`, curr);
            curr = temp;
        };
        
        for(let i=b2-1; i>=b1; i--){
            const temp = hashMap.get(`${a2}-${i}`);
            min = Math.min(temp, min)
            hashMap.set(`${a2}-${i}`, curr);
            curr = temp;
        };
        
        for(let i=a2-1; i>=a1; i--){
            const temp = hashMap.get(`${i}-${b1}`);
            min = Math.min(temp, min)
            hashMap.set(`${i}-${b1}`, curr);
            curr = temp;
        };
        
         result.push(min);
    };
               
    return result;
};