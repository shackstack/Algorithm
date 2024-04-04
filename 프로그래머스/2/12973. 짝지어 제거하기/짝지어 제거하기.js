function solution(s) {
    const stack = [];
    
    for(let alphabet of s.split('')){
        if(stack.at(-1) === alphabet) {
            stack.pop();
            continue;
        };
        stack.push(alphabet);
    };
    
    return stack.length === 0 ? 1 : 0
}