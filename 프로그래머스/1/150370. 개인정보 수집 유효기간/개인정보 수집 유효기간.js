function solution(today, terms, privacies) {
    const todayArr = today.split('.');
    const year = Number(todayArr[0]);
    const month = Number(todayArr[1]);
    const day = Number(todayArr[2]);
    
    const termsMap = new Map();
    
    terms.forEach((value)=>{
        const splitted = value.split(' ');
        
        termsMap.set(splitted[0], Number(splitted[1]));
    });
    
    const privaciesDue = privacies.map((value)=>{
        const [date, term] = value.split(' ');
        const privacyDate = date.split('.');
        
        let yearDue = Number(privacyDate[0]);
        let monthDue = Number(privacyDate[1]) + termsMap.get(term);
        let dayDue = Number(privacyDate[2]);
        
        if(monthDue > 12){
            if(monthDue % 12 === 0){
                yearDue += Math.floor(monthDue / 12) - 1;
                monthDue = 12;
            } else {
                yearDue += Math.floor(monthDue / 12);
                monthDue = monthDue % 12;
            };
        };
        
        return {yearDue, monthDue, dayDue};
    });
    
    const answer = [];
    
    privaciesDue.forEach(({yearDue, monthDue, dayDue}, index) => {
        if(year > yearDue) {
            answer.push(index + 1);
            return;
        };
        if(year === yearDue && month > monthDue) {
            answer.push(index + 1);
            return;
        };
        if(year === yearDue && month === monthDue && day > dayDue - 1) {
            answer.push(index + 1);
            return;
        };
    });
    
    return answer;
};