/*
Instructions:
Make use of .map() and .filter() methods.
You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.

1. Write an ES6 function that takes an array of numbers and returns an
 array with each number incremented by 3 using the map method.
/ Your ES6 function here
const numbers = [1, 2, 3, 4, 5]
console.log(incrementNumbers(numbers))
/ Output: [4, 5, 6, 7, 8]
*/
const incrementNumbers=(numbers)=>{
return numbers.map(val=>val+3)
}
const numbers = [1, 2, 3, 4, 5]
//console.log(incrementNumbers(numbers));

/*
2. Write an ES6 function that takes an array of strings and returns an 
array with all the strings capitalised using the map method.
/ Your ES6 function here
const myArray = ['apple', 'banana', 'cherry']
console.log(capitalizeArray(myArray))
/ Output: ["APPLE", "BANANA", "CHERRY"]
*/
const capitalizeArray=(myArray)=>{
    return myArray.map(String=>String.toUpperCase());
};
const myArray = ['apple', 'banana', 'cherry']
//console.log(capitalizeArray(myArray));

/*
3. Write an ES6 function that takes an array of objects representing 
people and returns an array of their ages using the map method.
/ Your ES6 function here
const people = [
 { name: 'Ankit', age: 25 },
 { name: 'Vinit', age: 24 },
 { name: 'Shashi', age: 29 },
]
const ages = getAges(people)
console.log(ages) // Output: [25, 24, 29]
*/
const getAges=(people)=>{
    return people.map(person=>person.age)
}
const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 },
   ];
   const ages = getAges(people);
   //console.log(ages) // Output: [25, 24, 29]

/*
4. Write an ES6 function that takes an array of objects representing 
products and returns an array with the product names in all lower case 
letters using the map method.
/ Your ES6 function here
const products = [
 { name: 'Lip Balm', stock: 100 },
 { name: 'PERFUME', stock: 400 },
 { name: 'Socks', stock: 200 },
]
console.log(getProductNamesInLowerCase(products))
/ Output: ["lip balm", "perfume", "socks"]
*/

const getProductNamesInLowerCase=(products)=>{
return products.map(products=>products.name.toLowerCase())
};
const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 },
   ]
   //console.log(getProductNamesInLowerCase(products));

/*
5. Write an ES6 function that takes an array of objects representing cities and
 returns an array of their names using the map method.
/ Your ES6 function here
const cities = [
 { name: 'New York', population: 8538000 },
 { name: 'Los Angeles', population: 3976000 },
 { name: 'Bangalore', population: 13608000 },
]
console.log(getCityNames(cities))
/ Output: ["New York", "Los Angeles", "Bangalore"]
*/
const getCityNames=(cities)=>{
    return cities.map(cities=>cities.name)
}
const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 },
   ]
   //console.log(getCityNames(cities))

/*
6. Write an ES6 function that takes an array of strings and returns an array with only the strings
that have a length greater than 5.
/ Your ES6 function here
const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']
console.log(filterLongStrings(fruits))
/ Output: ["banana", "cherry", "watermelon", "pineapple"]
*/
const filterLongStrings=(fruits)=>{
return fruits.filter(fruits=>fruits.length>5)
}
const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']
//console.log(filterLongStrings(fruits))

/*
7. Write an ES6 function that takes an array of numbers and returns an array with only the
numbers that are divisible by 3 and also by 5.
/ Your ES6 code here
const numbers = [1, 2, 30, 4, 15]
console.log(isDivisibleBy3and5(numbers))
/ Output: [30, 15]
*/
const isDivisibleBy3and5=(numberss)=>{
return numberss.filter(num=>num%3==0 && num % 5==0)
}
const numberss = [1, 2, 30, 4, 15]
//console.log(isDivisibleBy3and5(numberss));

/*
8. Write an ES6 function that takes an array of objects with the properties name and age, and
returns an array with only the objects that have an age greater than 30.
/ Your ES6 code here
const people = [
 { name: 'Rahul', age: 25 },
 { name: 'Raj', age: 35 },
 { name: 'Vijay', age: 45 },
]
console.log(filterByAge(people))
/ Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]
*/
const filterByAge=(peoples)=> peoples.filter((person)=>person.age>30);

const peoples = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 },
   ]
  //console.log(filterByAge(peoples));

/*
9. Write an ES6 function that takes an array of objects with the properties name and score, and
returns an array with only the objects that have a score greater than 80.
/ Your ES6 code here
const students = [
 { name: 'Aditya', score: 85 },
 { name: 'Bob', score: 75 },
 { name: 'Charlie', score: 90 },
]
console.log(filterByScore(students))
/ Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]
*/
const filterByScore = (studentss) => {
    return studentss.filter(student => student.score > 80);
  };
  
  const studentss = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 },
  ];
    console.log(filterByScore(studentss));

/*
10. Write an ES6 function that takes an array of objects with the properties name, age and city, and
returns an array with only the objects that have a city property of "Indore" and age greater than 70.
/ Your ES6 code here
const people = [
 { name: 'Ridhima', age: 75, city: 'Indore' },
 { name: 'Akshay', age: 60, city: 'Delhi' },
 { name: 'Udit', age: 80, city: 'Indore' },
 { name: 'Venki', age: 80, city: 'Bangalore' },
]
const filteredPeople = filterByCityAndAge(people)
console.log(filteredPeople)
/ Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city:
*/
const filterByCityAndAge=(peopless)=>{
    return peopless.filter(data=>data.city=="Indore" && data.age>70)
}
const peopless = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
    { name: 'Venki', age: 80, city: 'Bangalore' },
   ]
   const filteredPeople = filterByCityAndAge(peopless)
  // console.log(filteredPeople)


/*
11. Write an ES6 function that takes an array of objects containing book information (title, author,
genre) and returns an array with only the books of "Science Fiction".
/ Your ES6 code here
const books = [
 {
 title: "The Hitchhiker's Guide to the Galaxy",
 author: 'Douglas Adams',
 genre: 'Science Fiction',
 },
 {
 title: 'To Kill a Mockingbird',
 author: 'Harper Lee',
 genre: 'Fiction',
 },
 { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
 { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
]
const filteredBooks = filterByGenre(books, 'Science Fiction')
console.log(filteredBooks)
/ Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genr
*/
/*
const filterByGenre=(books,genre)=>{
    return books.filter(book=>book.genre=='Science Fiction')
}

const books = [
    {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    genre: 'Science Fiction',
    },
    {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    },
    { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
   ]
   const filteredBooks = filterByGenre(books, 'Science Fiction')
   console.log(filteredBooks)
*/
/*
12. Write an ES6 function that takes an array of objects containing 
employee information (name,age, salary) and returns an array with only 
the employees who earn a salary above 22000 and age is above 25.
/ Your ES6 code here
const employees = [
 { name: 'Abhay', age: 25, salary: 20000 },
 { name: 'Joice', age: 30, salary: 35000 },
 { name: 'Reena', age: 35, salary: 15000 },
 { name: 'Jeena', age: 40, salary: 50000 },
]
const filteredEmployees = filterBySalary(employees, 22000, 25)
console.log(filteredEmployees)
/ Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", 
age: 40, salary: 500
*/
/*
const filterBySalary=(employees)=>{
    return employees.filter(data=>data.salary>22000 && data.age>25)
}

const employees = [
 { name: 'Abhay', age: 25, salary: 20000 },
 { name: 'Joice', age: 30, salary: 35000 },
 { name: 'Reena', age: 35, salary: 15000 },
 { name: 'Jeena', age: 40, salary: 50000 },
]
const filteredEmployees = filterBySalary(employees, 22000, 25)
console.log(filteredEmployees)
*/