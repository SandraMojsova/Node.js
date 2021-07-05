let s="SOSTOTSOS";
function marsExploration(s) {
    let counter=0;
    if(s.length%3==0) {
        for(let i=0;i<s.length;i=i+3) {
            if(s[i]!="S") {
                counter++;
             }
            if(s[i+1]!="O") {
                counter++;
            }
            if(s[i+2]!="S") {
                counter++;
            }
        }
    }
    return counter;
}
console.log(marsExploration(s));