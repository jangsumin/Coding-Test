function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let x=0;x<participant.length;x++) {
        if(participant[x]!==completion[x]) {
            return participant[x];
        }
    }
}
