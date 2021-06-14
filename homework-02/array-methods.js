// //EXAMPLE WITH SLICE
let vegetables = ["tomato","patato","cucumber","carrot","spinach","garlic","broccoli"];
let someVegetables= vegetables.slice(1,5);
// console.log(someVegetables);
// console.log(vegetables);
let afterSpinach=vegetables.slice(4);
//console.log(afterSpinach);
let reverse=vegetables.slice(-4,-1);
//console.log(reverse);

// //EXAMPLE WITH MAP
let array=[1,2,3,4,5,6,7,8,9,10];
let array1=array.map(element=> element*3.5);
//console.log(array1);
let array2=array.map(element=>element+element*10);
//console.log(array2);
let func = a=> {
    return a**2;
}
let array3=array.map(func);
//console.log(array3);

// //EXAMPLE WITH FILTER
let array=[1,2,3,4,5,6,7,8,9,10];
let array1=array.filter(element=>element%2==1)
//console.log(array1);
let array2=array.filter(element=>element>3);
//console.log(array2);
let array3=array.filter(element=>element%3!=0);
//console.log(array3);

// //EXAMPLE WITH SPLICE
let array=["C","A","T","D","O","G"];
array.splice(3,3);
array.splice(3,0,"M","O","U","S","E");
array.splice(1,1,"U");
console.log(array);

//EXAMPLE WITH REDUCE
let array=[100,200,300,400,500];
let array1=array.reduce((accumulator,currentValue)=>accumulator+currentValue);
//console.log(array1);
let array2=array.reduce((accumulator,currentValue)=> {
    return accumulator*currentValue;
},1);
//console.log(array2);
let arr=[1.156,1.245,1.354,1.454,1.545];
let array3=arr.reduce( (accumulator,currentValue)=>{
    return accumulator+Math.round(currentValue);
},0);
//console.log(array3);

