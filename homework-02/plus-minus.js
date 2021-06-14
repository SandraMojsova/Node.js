function plusMinus(arr) {
    let counter1=0,counter2=0,counter3=0;
    arr.forEach( element=> {
        if(element>0) {
            counter1++;
        }
        else if(element<0) {
            counter2++;
        }
        else {
            counter3++;
        }
    });
console.log(`${(counter1/arr.length).toFixed(6)}`);
console.log(`${(counter2/arr.length).toFixed(6)}`);
console.log(`${(counter3/arr.length).toFixed(6)}`);
}