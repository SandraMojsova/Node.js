function findDigits(n) {
    let m=n.toString();
    let counter=0;
    for(let i=0; i<m.length; i++){ 
        if(n%parseInt(m[i])==0 && parseInt(m[i])!=0) {
            //console.log(parseInt(m[i]));
         counter++;
        }
    }
    return counter;
}
console.log(findDigits(1012));
console.log(findDigits(12));