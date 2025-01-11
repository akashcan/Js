// const circle = {
//     radius:1,
//     draw() {
//         console.log('draw');
//     }
// }

// for(let key of Object.keys(circle)){
//     console.log(key);
// }
// for(let arko of Object.entries(circle)){
//     console.log(arko);
// }
// if ('radius' in circle) console.log('yes');

// const another={};

// for(let arko in circle){
//     another[arko]=circle[arko];
// }
// console.log(another);//old method

// const another=Object.assign({}, circle);
// console.log(another);
// const another=
// { ...circle };
// console.log(another);


// const message ='This isn\'t my \nfirst message';
// console.log(message);
// const nam = 'Marc';

// const arko =
//  `Hi ${nam},

//  Thank you for your messge.

//  I'm looking forward to working with your team.

//  Best regards,
//  Akash Pandey`;

//  const now =new Date();
//  const date1= new Date(2018, 11, 31, 6, 30);
//  const date2=new Date('Dec 31 2024 06:40');

//  now.setFullYear(2024);



//  function showAddress(address){
//     for(let key in address){
//         console.log(key, address[key]);
//     }
//  }
// showAddress(address);

//factory function
// function createAddress(street, city, zipCode){
//     return{
//         street,
//         city,
//         zipCode
//     }
// }
// console.log(createAddress('a','b','c'));

// let address1 = new Address('a','b','c');
// let address2= new Address('a','b','c');

// console.log(areEqual(address1, address2));
// console.log(areSame(address1,address2));

// function Address(street, city, zipCode){
//     this.street= street;
//     this.city=city;
//     this.zipCode=zipCode;
// }

// function areEqual(address1, address2){

// return address1.street===address2.street && 
// address1.city===address2.city&& 
// address1.zipCode===address2.zipCode;
// }

// function areSame( address1, address2){
// return address1===address2;
// }

// const blog={
// title:'Akash',
// body:"Pandey",
// author:"Panda",
// views:23,
// comments:[
// {author:'Akash', body:'qwerty'},
// {author:'Akassh', body:'qwertys'}
// ],
// isLive:true
// };
// console.log(blog);

// 
// const priceRange={
//     range:[
// {label:'$',tootlTip:'Inexpensive',from:0, to:10},
// {label:'$$',tootlTip:'Moderate',from:11, to:29},
// {label:'$$$',tootlTip:'Expensive',from:30, to:50}
//     ]
// };
// console.log(priceRange.range);

// const circle1 = createCircle(5, 'red');
// console.log(circle1.getArea()); // Should print the area of the circle

// function createCircle(radius, color){
//     return{
//         radius,
//         color,
//         getArea(){
//          return (Math.PI*(radius*radius));
//         }
//     };
// };

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }

// // Define the method on the prototype
// Rectangle.prototype.getPerimeter = function () {
//     return 2 * (this.width + this.height);
// };

// const rect = new Rectangle(10, 20);
// console.log(rect.getPerimeter()); // Output: 60

// Create a factory function createBankAccount that:

// Initializes with a balance.
// Includes a method deposit(amount) to add money.
// Includes a method withdraw(amount) to subtract money, but only if there’s enough balance.
// Ensures balance cannot be directly accessed or modified from outside.

// const account = createBankAccount(1000);
// account.deposit(500);
// console.log(account.withdraw(2000)); // Should return a message: "Insufficient funds"

// function createBankAccount(balance){ 
// return{
// balance,
// deposit(amount){
// balance+=amount;
// return `Deposited: ${amount}. New Balance: ${balance}`;
// },
// withdraw(amount){
    
//     if(balance<amount) return `Insufficient Funds. Current Balanace: ${balance}`;
//     else {balance-=amount; return `Withdraw: ${amount}. New Balance: ${balance}`;}
// }

//  }
// }



// function Car(make, model, year, isElectric=false){
// this.make=make;
// this.model=model;
// this.year=year;
// this.isElectric=isElectric;
// }

// Car.prototype.getCarInfo = function(){
//     return `${this.year} ${this.make} ${this.model} ${this.isElectric ? '(Electric)' : ''}` ;
// }

// const car1=new Car('Tesla', 'Model S', 2022, true);
// console.log(car1.getCarInfo());
// const num=[3, 4];

// //to add the element inside the array

// //end
// num.push(5, 6);

// //beginning
// num.unshift(1, 2);

// //Middle
// num.splice(2,0,"middle");
// console.log(num);


// const numbers=[1,2,3,3,4,1];
// console.log(numbers.indexOf(1,2) );
// console.log(numbers.lastIndexOf(1));
// console.log(numbers);
// console.log(numbers.includes(5));

// const courses=[
//     {id:1,name:'q'},
//     {id:2, name:'p'}
// ];
// const course=courses.find(function(course){
//     return course.id===1;
// })
// console.log(course);

// 

// const numbers=[1,2,3,4];

// const last=numbers.pop(); //delete last element
// const first=numbers.shift();//delete first element
// numbers.splice(1,2)
// console.log(numbers);
// let numbers=[1,2,3,4,5];
// let another=numbers;
// numbers.length=[];
// console.log(numbers);
// console.log(another);

// const first=[1,2,3];
// const second=[4,5,6];

// // const combined=first.concat(second);
// // const slice= combined.slice();
// // console.log(combined);
// // console.log(slice);

// const combined=[...first, 'a',...second,'b']
// console.log(combined);

// const numbers=[1,2,3,4];
// for(let number of numbers){
//     console.log(number);
// }

// // numbers.forEach(function(number){
// //     console.log(number);
// // })

// numbers.forEach((number,index) => console.log(number, index));

// const numbers=[1,2,3,4,5];
// const joined=numbers.join(',,');
// console.log(joined);

// const message= "This is my first message";
// const parts= message.split(' ');
//  const combined= parts.join('-');
//  console.log(combined);
//  console.log(parts);

// // Sorting an array Primitive types 
// const numbers=[5,7,3,2,1];
// numbers.sort();
// console.log(numbers);
// //sorting an array of objects


// const employees=[
// { name:  'Akash', dob: 'Dec 15, 1997', score:80 },
// { name: "navin", dob:'jan 23, 1858', score:50},
// { name: "sabin", dob:'May 23, 1858', score:95}
// ];
// employees.sort((a,b)=> a.score - b.score);
// console.log(employees);

// const course=[
// {id:1, name:'Node.js'},
// {id:2, name:'Javascript'}
// ];

// course.sort(function(a,b){
//   if(  a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
//   if(  a.name.toLowerCase() > b.name.toLowerCase() ) return 1;
//   return 0;
// })
// console.log(course);


// const number=[1,2,-3,4,5];

// const allPositive=number.every(function(value){
//     return value >= 0;
// });
// console.log(allPositive);



// const numbers = [1,2,3,4,-1,5,5];
// const filtered=numbers.filter(function( value ) {
//     return value <= 0;
// })
// console.log(filtered);


const numbers=[1,2,3,4,-3,-4,-14,5,6];

const filtered =  numbers.filter((value)=> value<=0);
console.log(filtered);