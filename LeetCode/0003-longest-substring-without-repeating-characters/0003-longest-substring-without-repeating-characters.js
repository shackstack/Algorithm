/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    if(s==='') return 0;
    
    const sArray = s.split('');
    let result = 0;

    sArray.forEach((value, index)=>{
        const arr = [value];
        let currentIndex = index + 1;

        while(true){
            if(!sArray[currentIndex]) break;
            if(arr.includes(sArray[currentIndex])) break;
            arr.push(sArray[currentIndex]);
            currentIndex++;
        }

        if(result < arr.length) {
            result = arr.length;
            }
    })

    return result;
};