function solution(fees, records) {
    const [defaultTime, defaultAmount, unitTime, unitAmount] = fees;
    const endTime = {
        hour: 23,
        minute : 59
    };
    
    const amountMap = new Map();
    
    records.forEach((value) => {
        const [time, carNumber, type] = value.split(' ');
        const [hour, minute] = time.split(':').map((v) => Number(v));
        
        if(type === "IN"){
            if(amountMap.has(carNumber)){
                amountMap.set(carNumber, {...amountMap.get(carNumber), entryTime:[hour, minute]});
                return;
            };
            amountMap.set(carNumber, {interval:0, entryTime:[hour, minute]});
        };
        
        if(type === "OUT"){
            const [entryHour, entryMinute] = amountMap.get(carNumber).entryTime;
            
            const minuteInterval = minute - entryMinute;
            const hourInterval = hour - entryHour;
            const interval = hourInterval * 60 + minuteInterval;
            
            amountMap.set(carNumber, {interval:amountMap.get(carNumber).interval + interval, entryTime:null});
        };
    });
    
    const amountArr = new Array(...amountMap);
    
    const result = amountArr.sort().map(([key, value]) => {
        let {interval, entryTime} = value;
        
        if(entryTime){
            const [entryHour, entryMinute] = entryTime;
            const minuteInterval = 59 - entryMinute;
            const hourInterval = 23 - entryHour;
            interval += hourInterval * 60 + minuteInterval;
        }
        
        const overtime = interval - defaultTime;
        let amount = defaultAmount;

        if(overtime > 0){
            amount += Math.ceil(overtime / unitTime) * unitAmount;
        };
        
        return amount;
    });
    
    return result; 
}