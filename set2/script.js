/*
Functional Practice Question Set 2
Instructions:
Make use of .map(), .filter() and .find() methods.
You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
Do NOT use for-loops.
*/
/*
1. Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.
const people = [
 { name: 'Raj', age: 28 },
 { name: 'Swapnil', age: 42 },
 { name: 'Anushka', age: 35 }
];
/ Your code here
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']
*/
const getNames=(peopleArr)=>{
    return peopleArr.map(people=>people.name)
}
const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
   ];
   const names = getNames(people);
   //console.log(names);
