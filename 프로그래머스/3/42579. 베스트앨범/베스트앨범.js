function solution(genres, plays) {
    const answer = [];
    const genreMap = new Map();
    
    genres.forEach((v, i) => {
        const playItem = {id : i, playCount : plays[i]};
        
        if(!genreMap.has(v)) {
            genreMap.set(v, {totalPlayCount : plays[i], playList: [playItem]});
            return;
        };
        
        const {totalPlayCount, playList} = genreMap.get(v);
        
        genreMap.set(v, {totalPlayCount : totalPlayCount + plays[i], playList: [...playList, playItem]});
    });
    
    const sorted = [...genreMap].sort((a,b) => b[1].totalPlayCount - a[1].totalPlayCount);
    
    sorted.forEach(([genre, {count, playList}]) => {
        const limit = Math.min(playList.length, 2);
        
        playList.sort((a, b) => b.playCount - a.playCount);
        
        for(let i=0; i<limit; i++){
            answer.push(playList[i].id);
        };
    });
    
    return answer;
}