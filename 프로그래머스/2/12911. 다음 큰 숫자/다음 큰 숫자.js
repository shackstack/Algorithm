function solution(n) {
    let binary = 0;
    let size = 0;
    let position = 1;
    let current = n;
    
    while(current / 2 > 0){
        const rest = current % 2;
        
        if(rest === 1) {
            size++;
        }
        binary += rest * position;
        position = position * 10;
        current = Math.floor(current / 2);
    };
    
    n++;
    
    while(true){
        let nextValueSize = 0;
        let share = n;
        
        while(share / 2 > 0){
            const rest = share % 2;

            if(rest === 1) {
                nextValueSize++
            };
            
            share = Math.floor(share / 2);
        };
        
        if(nextValueSize === size) return n;
        
        n++;
    };
}