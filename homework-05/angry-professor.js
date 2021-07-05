function angryProfessor(thresholdNumber, arrivalTimes) {
    let positive=0;
    arrivalTimes.forEach(time=> {
        if(time<=0) {
            positive++;
        }
    });
    if(positive>=thresholdNumber) {
        return 'NO'
    }
   return 'YES'
}
console.log(angryProfessor(3,[-1,-3,4,2]));
console.log(angryProfessor(2,[0,-1,2,1]));