var lodash = require('lodash');

let array=[1,2,3,4,5,'x','y','z'];

//1.
let chunk= lodash.chunk(array,6);
//console.log(chunk);

//2.
let array1=['S','a','n','d','r','a'];
let concat= lodash.concat(array,array1);
//console.log(concat);

//3.
let difference=lodash.difference(concat,array);
//console.log(difference);

//4.
let join=lodash.join(array1,' ');
//console.log(join);

//5.
var array2=[1,2,3,4,5];
var evens=lodash.remove(array2, element => {
    return element%2==0;
})
//console.log(evens);
//console.log(array2);
