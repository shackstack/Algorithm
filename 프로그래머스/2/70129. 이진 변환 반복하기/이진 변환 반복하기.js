function solution(s) {
    let origin = s;
    let sequence = 0;
    let removedZeroSize = 0;
    
    while(origin.length !== 1){
        sequence++;
        removedZeroSize += origin.replaceAll('1', '').length;
        origin = origin.replaceAll('0', '');
        
        let currentPosition = 1;
        let currentNumber = origin.length;
        let binary = 0;
        
        while(currentNumber > 0){
            binary += (currentNumber % 2) * currentPosition;
            currentNumber = Math.floor(currentNumber / 2);
            currentPosition = currentPosition * 10;
        }
        
        origin = String(binary);
    };
    
    return [sequence, removedZeroSize];
}