function solution(participant, completion) {
    let result;
    const hashMap = new Map();
    
    participant.forEach((person)=>{
        if(!hashMap.has(person)) {
            hashMap.set(person, 1);
            return;
        }
        hashMap.set(person, hashMap.get(person) + 1);
    });
    
    completion.forEach((person)=>{
        hashMap.set(person, hashMap.get(person) - 1);
    });
    
    hashMap.forEach((value,key)=>{
        if(value === 1) {
            result = key;
        }
    });
    
    return result;
}