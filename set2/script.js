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

/*
2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.
const numbers = [1, 2, 3, 4];
/ Your code here
console.log(multiplyByFive); // Output: [5, 10, 15, 20]
*/
const multiplyByFive=(number)=>{
    return number.map(num=>num*5)
}
const numbers = [1, 2, 3, 4];
//console.log(multiplyByFive(numbers));

/*
3. Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.
const employeeData = [
{name: "ram", dept: "marketer"},
{name: "Radha", dept: "SDE"},
{name: "shyam", dept: "finance professional"},
]
/ Your code here
console.log(greetEmployeeMessages);
/ Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to hav
*/
const greetEmployeeMessages=(employeData)=>
    employeData.map((employee)=> `Hi ${employee.name} we are glad to have you as ${employee.dept}ing,`
);

const employeeData = [
    {name: "ram", dept: "marketer"},
    {name: "Radha", dept: "SDE"},
    {name: "shyam", dept: "finance professional"},
    ];
    //console.log(greetEmployeeMessages(employeeData));

    
/*
4. Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.
const books = [
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
 { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
 { title: '1984', author: 'George Orwell' },
 { title: 'Pride and Prejudice', author: 'Jane Austen' },
  / Your code here
const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pr
*/
const getBookTitles=(book)=>{
    return book.map(tit=>tit.title)
    }
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
    ]
    const titles = getBookTitles(books);
    //console.log(titles);
    
    /*
    5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.
    const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
    / Your code here
    console.log(studentNames);
    / Output: ["Anjali", "Arpit", "Ankit"]
    */
    const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"];
    const nameStartWithA = (names) => {
      return names.filter(name => name.startsWith('A'));
    };
    //console.log(nameStartWithA(studentName));
    
    /*
    6. Write an ES6 function which filters out the products which have a price greater than 40.
    const productData = [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
    ]
    / Your code here
    console.log(getProducts(productData, 40))
    / Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]
    */
    const getProducts=(product)=>{
        return product.filter(Data=>Data.price>40)
    }
    const productData = [
        {prodName: "Dairy Milk", price: 10},
        {prodName: "Dairy Milk Silk", price: 70},
        {prodName: "Five Star", price: 20},
        {prodName: "Mars", price: 50}
        ]
       // console.log(getProducts(productData, 40))
    
    /*
    7. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.
    const numbers = [1, 2, 3, 21, 14, 7];
    / Your code here
    console.log(isDivisibleBy7)
    / Output: 21
    */
    const isDivisibleBy7=(nums)=>{
        return nums.find(num=>num%7==0)
    }
    const numberss = [1, 2, 3, 21, 14, 7];
    console.log(isDivisibleBy7(numberss))
    
    /*
    8. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.
    const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan", 
    / Your code here
    console.log(isNamesGreaterThan8(names));
    / Output: "Geetanjali"
    */
    const isNamesGreaterThan8=(nam)=>{
        return nam.find(string=>string.length>8)
    }
    const names1 = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan", 
    ]
        console.log(isNamesGreaterThan8(names1));
    
    /*
    9. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".
    const students = [
     { name: "John", grade: "B" },
     { name: "Mary", grade: "A" },
     { name: "Sam", grade: "C" },
     { name: "Sarah", grade: "A" },
    ];
    / Your code here
    const studentWithGradeA = findStudentWithGradeA(students);
    console.log(studentWithGradeA);
    / Output: { name: "Mary", grade: "A" }
    */
    const findStudentWithGradeA=(student)=>{
        return student.find(stud=>stud.grade=="A")
    }
    const students = [
        { name: "John", grade: "B" },
        { name: "Mary", grade: "A" },
        { name: "Sam", grade: "C" },
        { name: "Sarah", grade: "A" },
       ];
       const studentWithGradeA = findStudentWithGradeA(students);
      // console.log(studentWithGradeA);
    