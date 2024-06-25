/*  Instructions:
Make use of .filter(), .find() and .reduce() methods.
You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
Do NOT use for-loops.  */

/*1. Write an ES6 function that takes an array of objects representing
     cars with properties make, model, and year. Return the first car
    object that is a Toyota and the year is after 2010.
const cars = [
 { make: 'Toyota', model: 'Corolla', year: 2010 },
 { make: 'Honda', model: 'Civic', year: 2012 },
 { make: 'Toyota', model: 'Camry', year: 2015 },
 { make: 'Ford', model: 'Mustang', year: 2018 },
]
// Your code here
const toyotaCar = findToyotaCar(cars)
console.log(toyotaCar)
// Output: { make: "Toyota", model: "Camry", year: 2015 }
*/
const findToyotaCar=(car)=>{
    return car.find(cardetails=> cardetails.make==='Toyota'&& cardetails.year>2010)
}
const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
   ]
   const toyotaCar = findToyotaCar(cars)
//console.log(toyotaCar);


/*
2.  Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars 
that were made after the year 2012.
const cars = [
 { make: 'Toyota', model: 'Corolla', year: 2010 },
 { make: 'Honda', model: 'Civic', year: 2012 },
 { make: 'Toyota', model: 'Camry', year: 2015 },
 { make: 'Ford', model: 'Mustang', year: 2018 },
]
/ Your code here
const getCars = getCarDetails(cars)
console.log(getCars)
/ Output: [{ make: "Toyota", model: "Camry", year: 2015 },
            { make: "Ford", model: "Musta
*/
const getCarDetails=(car)=>{
    return car.filter(details=>details.year>2012)
}
const cars1 = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
   ]
   const getCars = getCarDetails(cars1)
//console.log(getCars)


/* 
3.  Write an ES6 function that takes an array of objects representing
 products with properties name, price, and category. Return the first 
 product object that is in the category "electronics".
const products = [
 { name: 'Toothbrush', price: 29, category: 'health' },
 { name: 'Coffee Maker', price: 99, category: 'home' },
 { name: 'iPad', price: 799, category: 'electronics' },
 { name: 'Smartwatch', price: 199, category: 'electronics' },
]
/ Your code here
const electronicsProduct = findElectronicsProduct(products)
console.log(electronicsProduct)
/ Output: { name: "iPad", price: 799, category: "electronics" }
*/
const findElectronicsProduct=(categories)=>{
    return categories.find(categ=>categ.category==='electronics')
}
const products = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
   ]
   const electronicsProduct = findElectronicsProduct(products)
//console.log(electronicsProduct)

