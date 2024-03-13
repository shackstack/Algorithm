function solution(phone_book) {
    let result = true;
    const hashMap = new Map();
    
    phone_book.sort((a,b)=>b.length-a.length).forEach((phoneNumber)=>{
        for(let i=0; i<phoneNumber.length; i++){
            if(phoneNumber.length - 1 === i && hashMap.has(phoneNumber)){
                result = false;
                break;
            }
            if(hashMap.has(phoneNumber.substring(0, i+1))){
                continue;
            }
            hashMap.set(phoneNumber.substring(0, i+1));
        };
    });
    
    return result;
}