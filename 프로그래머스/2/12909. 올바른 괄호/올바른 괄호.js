function solution(s){
    const queue = [];
    
    s.split('').forEach((bracket)=>{
        queue.push(bracket);            
        if(queue.at(-2)==='(' && queue.at(-1)===')' ){
            queue.pop();
            queue.pop();
        };        
    });
    
    return queue.length === 0;
}