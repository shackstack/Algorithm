function solution(progresses, speeds) {
    const queue = [];
    const dues = progresses.map((progress,index)=>{
        const rest = 100-progress;
        const due = rest % speeds[index] === 0 ? Math.floor(rest / speeds[index]) : Math.floor(rest / speeds[index]) + 1;
        
        return due;
    })
    
    let last = dues[0];
    
    dues.forEach((due)=>{
        if(last > due) {
            queue.push(last);
            return
        };
        last = due;
        queue.push(last);
    });
    
    const hashMap = new Map();
    
    queue.forEach((value)=>{
        if(!hashMap.has(value)){
            hashMap.set(value, 1);
            return;
        };
        hashMap.set(value, hashMap.get(value) + 1);
    });
    
    return [...hashMap].map(([_, counts])=> counts);
}