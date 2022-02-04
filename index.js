let books = [
    {
        title:'Eloquent JavaScript: A Modern Introduction to Programming',
        price: 10.00,
        inventory: 10
    },
    {
        title: 'JavaScript & JQuery : Interactive Front-End Web Development',
        price: 45.59,
        inventory: 2
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 36.05,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: 20.99,
        inventory: 0
    },
    {
        title: 'You don\'t know JS',
        price: 6.25,
        inventory: 7
    }
]


// Return an array of titles

// Loop through array.
// For every item in the array update/change/transform that item without mutating the original array.
// Make a new array to hold the update/changed/transformed items

// function loopAndUpdate(array){
//     const updatedArray = [];
//     for(let item of array){
//         updatedArray.push(item.title) // we push this through the original array
//     }
//         return updatedArray
// };
//=> [
    // "Eloquent JavaScript: A Modern Introduction to Programming",
    // "JavaScript & JQuery : Interactive Front-End Web Development",
    // "JavaScript: The Good Parts",
    // "JavaScript: The Definitive Guide",
    // "You don't know JS"
//]



// making the function more dynamic by giving it a second function, updaterfunction
// function loopAndUpdate(array, updaterGuy){
//     const updatedArray = [];
//     for(let item of array){
//         updatedArray.push(updaterGuy(item))
//     }
//     return updatedArray
// }
// // Returning an array of titles
// function titles(item){
//    return item.title
//}
// (in the console) updatedLoops(books, titles) we get
// => [
//     "Eloquent JavaScript: A Modern Introduction to Programming",
//     "JavaScript & JQuery : Interactive Front-End Web Development",
//     "JavaScript: The Good Parts",
//     "JavaScript: The Definitive Guide",
//     "You don't know JS"
// ]


// Return an array of prices
// function prices(item){
//     return item.price
// }
// // (in the console) updatedLoops(books, prices) => [
//     5,
//     22,
//     18,
//     10,
//     3
// ]


// Return an array of inventory
// function inventory(item){
//     return item.inventory
// }
// (in the console) => [
//     10,
//     2,
//     8,
//     0,
//     7
// ]


//Return an array of books, 50% off

// function halfOff(item){
//     item.price = Math.floor(item.price/2)
//     return item
// }

// => We eneded up mutating the original array which we dont want. (When we now open "books" in the terminal we have the changed prices, which once again we don't want)

// 0: {title: 'Eloquent JavaScript: A Modern Introduction to Programming', price: 5, inventory: 10}
// 1: {title: 'JavaScript & JQuery : Interactive Front-End Web Development', price: 22, inventory: 2}
// 2: {title: 'JavaScript: The Good Parts', price: 18, inventory: 8}
// 3: {title: 'JavaScript: The Definitive Guide', price: 10, inventory: 0}
// 4: {title: "You don't know JS", price: 3, inventory: 7}
// length: 5


// function halfOff(item){
//     let itemCopy = Object.assign({}, item)
//     itemCopy.price = Math.floor(itemCopy.price/2)
//     return itemCopy
// } 
// (in the console) => loopAndUpdate(books, halfOff) we can now see that the prices are half off 
// 0: {title: 'Eloquent JavaScript: A Modern Introduction to Programming', price: 5, inventory: 10}
// 1: {title: 'JavaScript & JQuery : Interactive Front-End Web Development', price: 22, inventory: 2}
// 2: {title: 'JavaScript: The Good Parts', price: 18, inventory: 8}
// 3: {title: 'JavaScript: The Definitive Guide', price: 10, inventory: 0}
// 4: {title: "You don't know JS", price: 3, inventory: 7}
// length: 5


// (in the console) => books
// by using Object.assign we were able to create a copied function allowing us to keep the original array
// 0: {title: 'Eloquent JavaScript: A Modern Introduction to Programming', price: 10, inventory: 10}
// 1: {title: 'JavaScript & JQuery : Interactive Front-End Web Development', price: 45.59, inventory: 2}
// 2: {title: 'JavaScript: The Good Parts', price: 36.05, inventory: 8}
// 3: {title: 'JavaScript: The Definitive Guide', price: 20.99, inventory: 0}
// 4: {title: "You don't know JS", price: 6.25, inventory: 7}
// length: 5




// Writing Clean Lines 


// Return an array of titles 
// Console.log the array
// const title = books.map(function(item){
//     console.log(item)
// })
// passing the function as an argument to map 
// after running we see all the items in our console 
//loops throught every item in our array and console logs it 


// Returning the array 
// const title = books.map(function(item){
//     return item.title
// }) 
//


const title = books.map(item => item.title) 

// the function we're passing as an argument is taking the item.price . when it returns is added to the new array


// Return an array of prices
function priceFoo(item){
    return item.price
} 
const prices = books.map(pricesFoo)

// Return an array of inventory 
// function inventory(item){
//     return item.inventory
// }
const inventory = (item => item.inventory) // this is the same as the above (174)

// Return an array of books 50% Off

function halfOff(item){
    let itemCopy = Obhject.assaign({}, item)
    itemCopy.price = Math.floor(itemCopy.price/2)
    return itemCopy
 }

const halfOff = books.map(halfOffFoo)
// for every item in our map its going to pass halfOffFoo and change it 
