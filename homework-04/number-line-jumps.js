function kangaroo(position1, distance1, position2, distance2) {
    for(let jumps=0; jumps<=10000; jumps++){
        let kangaroo1 = position1 + jumps*distance1;
        let kangaroo2 = position2 + jumps*distance2;
        if(kangaroo1 == kangaroo2) {
            return 'YES';
        }
    }
    return 'NO';
}
console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,3,5,3));
