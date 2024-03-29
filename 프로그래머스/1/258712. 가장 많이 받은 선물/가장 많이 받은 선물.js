function solution(friends, gifts) {
    const resultMap = new Map();
    const giverMap = new Map();
    const receiverMap = new Map();
    
    friends.forEach((name) => {
        resultMap.set(name, 0);
        giverMap.set(name, []);
        receiverMap.set(name, []);
    });
    
    gifts.forEach((value) => {
        const [giver, receiver] = value.split(' ');
        
        giverMap.set(giver, [...giverMap.get(giver), receiver]);
        receiverMap.set(receiver, [...receiverMap.get(receiver), giver]);
    });
    
    const indexMap = new Map();
    
    friends.forEach((name) => {
        indexMap.set(name, giverMap.get(name).length - receiverMap.get(name).length);
    });
    
    for(let i=0; i < friends.length - 1; i++){
        for(let j=i+1; j < friends.length; j++){
            const sizeA = giverMap.get(friends[i]).filter((v) => v === friends[j]).length;
            const sizeB = giverMap.get(friends[j]).filter((v) => v === friends[i]).length;
            
            if(sizeA > sizeB){
                resultMap.set(friends[i], resultMap.get(friends[i]) + 1);
                continue;
            };
            if(sizeA < sizeB){
                resultMap.set(friends[j], resultMap.get(friends[j]) + 1);
                continue;
            };
            if(indexMap.get(friends[i]) > indexMap.get(friends[j])){
                resultMap.set(friends[i], resultMap.get(friends[i]) + 1);
                continue;
            };
            if(indexMap.get(friends[i]) < indexMap.get(friends[j])){
                resultMap.set(friends[j], resultMap.get(friends[j]) + 1);
                continue;
            };
        };
    };
    
    let answer = 0;
    
    resultMap.forEach((value) => {
        answer = Math.max(value, answer);
    });
    
    return answer;
}