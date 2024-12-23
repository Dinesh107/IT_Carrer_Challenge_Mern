// console.log("Welcome to js world thiloth");
// console.log("Welcome to js");

// window.alert("Welcome to js");
// window.alert("I like briyani");

// document.getElementById("myH1").innerHTML ="Welcome to JS world thiloth";
// document.getElementById("myH2").innerHTML ="Welcome to JS world thiloth";
// document.getElementById("myH3").innerHTML ="Welcome to JS world thiloth";
// document.getElementById("myP").innerHTML ="Welcome to JS world";

// Variables - a container that stores a value, behave as if were the value it contains.

// declaration let x;
// assignment x = 100;

// let x = 100; 

// console.log(x);


// let var const

// Variables

// datatypes

// Number

// String

// Boolean 

// let age = 25;

// console.log(age);

// let price = 10.99;

// console.log(price);

// let gpa = 5.5;

// console.log(`kavin age is ${age}`);
// console.log("kavin age is ${age}");
// console.log(`the price is ${price}`);
// console.log(`the gpa is ${gpa}`);

// String - string is the collectons of characters.

// Pascal and Camel

// pascal - class, project name
// every word first letter must be in capital
// eg: Mobilephone


// camel - varaibles, function, object 
// expect first word remaining word must be in capital and first word first letter must be in capital.

// eg: mobileGallery();

// let firstName = "Thiloth";
// let email = "thiloth@gmail.com";

// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);
// console.log(`your email is ${email}`);

//booleans - true/false 

// let online = true;
// console.log(typeof online);
// console.log(`kavin is online ${online}`);


// arithmetic operators = operands (values, variables)

// operators (+ - * / %)

let students = 20;
// students = students + 1;
// students += 1;
// console.log(students);
// students -= 1;
// console.log(students);
// students *= 2;
// console.log(students);
// students /= 2;
// console.log(students);

// Acccept user input in js

// Easy way - window prompt

// professional way - HTML testbox

// let username;

// username = window.prompt('Enter your username');

// console.log(username);

// let username;

// document.getElementById('mySubmit').onclick = function() {
//      username = document.getElementById('myText').value;
//      document.getElementById('myH1').textContent = `Hello ${username}`;
//      console.log(username);
// }

// username, email, city 

// Type convertion 

// let age = window.prompt("How old are you?");

// age = Number(age);

// age+=1;

// console.log(typeof age);
// console.log(age);

// let x = "";

// let y = "";

// let z = "";

// x = Number(x);

// y = String(y);

// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// Constants - varaiable that can't changed

// let var const

// const PI = 3.14159;
// let radius;
// let circumference;


// document.getElementById("mySubmit").onclick = function() {
//      radius = document.getElementById("myText").value;
//      radius = Number(radius);
//      circumference = 2 * PI * radius;
//      document.getElementById("myH3").textContent = ` the circum is ${circumference} cm`;
// }

// Counter Program

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function() {
//      count++;
//      countLabel.textContent = count;
// }

// Math Object - built-in object that provides a collections of properties and methods.

// console.log(Math.PI);

// let x = 81;
// let y = 2;
// let z = 1;
// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// let max = Math.max(x, y, z);
// console.log(max);
// let min = Math.min(x, y, z);
// console.log(min);

// Randon number generator

// let min = 50;
// let max = 100;
// let randomNum = Math.floor(Math.random() * max) + min;
// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function() {
//      randomNum = Math.floor(Math.random() * max) + min;
//      myLabel.textContent = `The number is ${randomNum}`; 
// }

// Conditional statements 

// if statement

// let age = 30;
// if(age >= 18) { // true
//     console.log("You are old enough to enter this site");
   
// } else {
//      console.log("You are not old enough to enter this site");
// }

// let time = 9

// if(time < 12) { // true
//     console.log("Good morning");
// } else {
//      console.log("good afernoon"); 
// }

// let isStudent = true;
// if(isStudent) {
//      console.log("You are a student");
// } else {
//      console.log("You are not a student");
// }


// nested statements

// let age = 18;
// let hasLicense = true;


// if(age >= 18) {
//      console.log("you are old enough to drive");

//      if(hasLicense) {
//           console.log("You have your license");
//      } else {
//           console.log("You don't have your license yet");
//      }

// } else {
//      console.log("You must be 18+ to have a license");

// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function() {
//      age = myText.value;
//      age = Number(age);
//      if(age >= 100) {
//           resultElement.textContent = `You are too old to enter this site`;
//         } else if(age == 0) {
//              resultElement.textContent = `You are not born yet`;
//         } else if(age >= 18) {  
//              resultElement.textContent = `You are old enough to enter this site`;  
//         } else if(age < 0) {
//              resultElement.textContent = `You age can't be below 0`; 
             
//         } else {
//              resultElement.textContent = `You are not old enough to enter this site`;
//         }
// }


// let age = 0;

// if(age >= 100) {
//   console.log("You are too old to enter this site");
// } else if(age == 0) {
//      console.log("You are not born yet");
// } else if(age >= 18) {
//      console.log("You are old enough to enter this site");     
// } else if(age < 0) {
//      console.log("You age can't be below 0");
// } else {
//      console.log("You are not old enough to enter this site");
// }


// Ternary operator = a shortcut to if{} and else{} statements help to assign a variable based on a conditions 

//  condition ? codeIfTrue : codeIfFalse; 

// let age = 23; 

// let message = age >= 18 ?  "you're an adult" : "you're an+ adult"; 

// console.log(message);

// let time= 16;

// let greet = time < 12 ? "Good Morning" : "Good afternoon";

// console.log(greet);


// Switch statement = can be efficient replacement to many else statements

// let day = 4;

// if(day == 1) {
//      console.log("Monday");
// } else if(day == 2) {
//      console.log("Tuesday");
// } else if(day == 3) {
//      console.log("Wednesday");
// } else if(day == 4) {
//      console.log("Thursday");
// } else if(day == 5) {
//      console.log("Friday");
// } else if(day == 6) {
//      console.log("Saturday");
// } else if(day == 7) {
//      console.log("Sunday");
// } else {
//      console.log("Invalid day number");
// }

// let day = 3;

// switch(day) {
//      case 1:
//           console.log("Monday");
//           break;
//      case 2:
//           console.log("Tuesday");
//           break;
//      case 3:
//           console.log("Wednesday");
//           break;
//      case 4:
//           console.log("Thursday");
//           break;
//      case 5:
//           console.log("Friday");
//           break;
//      case 6:
//           console.log("Saturday");
//           break;
//      case 7:
//           console.log("Sunday");
//           break;
//      default:
//           console.log("Invalid day number");
// }


// let testScore = 90;
// let letterGrade;

// switch(true) {
//      case testScore >= 90:
//            letterGrade = "A";
//            break;
//      case testScore >= 80:
//           letterGrade = "B";
//           break;
//      case testScore >= 70:
//           letterGrade = "C";
//           break;
//      case testScore >= 60:
//           letterGrade = "D";
//           break;
//      default:
//           letterGrade = "F";
// }
// console.log(`Your letter grade is ${letterGrade}`);

// mini calculator using switch 
// ask user to enter the number one 
// ask user to enter number two 
// ask user to enter the operator + - * /
// using switch cases 
// log the result  

// String Methods - allow us to manipulate and work with text (strings)

// let userName = "Thiloth";

// console.log(userName.length);

// console.log(userName.toUpperCase());

// console.log(userName.toLowerCase());

// console.log(userName.charAt(3));

// console.log(userName.indexOf("h"));

// console.log(userName.lastIndexOf("h"));

// console.log(userName.startsWith("Thi"));

// console.log(userName.endsWith("th"));

// console.log(userName.replace("T", "Th"));

// console.log(userName);

// userName = userName.trim();

// console.log(userName);

// String slicing

// const fullName = "Vijaya Navin";

// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6);
// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1)
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);
//  const email = "thiloth123@gmail.com";
// username
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(extension);

// logical operators - used for combine or manipulate boolean values (true or false)

// AND = && 
// OR = || 
// NOT = !

// const temp = -21;

// if(temp > 0 && temp <= 30) {
//       console.log("the weather is good");
// } else {
//       console.log("the weather is not good");
// }
// const temp = -250;

// if(temp <= 0 || temp > 30) {
//       console.log("the weather BAD");
// } else {
//       console.log("the weather is Good");
// }

// const isSunny = false;

// if(!isSunny) {
//      console.log("It is cloudy");
     
// } else {
//      console.log("It is sunny");
// }

// = assignment operator 
 
// == comparison operator (compare if values are equal)

// === strict equality operator (comapare if values and datatypes are equal)

// != inequlity operator

// !== strict inequality operator

// const PI = 3.14;

// if(PI !== "3.14") {
//     console.log("That is not PI");
// } else {
//     console.log("That is PI");
// }

// if(PI != "3.14") {
//     console.log("That is not PI");
// } else {
//     console.log("That is PI");
// }

// if(PI === "3.14") {
//     console.log("That is PI");
// } else {
//     console.log("That is not PI");
// }

// if(PI == "3.14") {
//     console.log("That is PI");
// } else {
//     console.log("That is not PI");
// }

// Control Statements or looping statements

// while loop - repeat some code WHILE some condition is true

// let username = "";

// while(username === "" || username === null) {
//      username = window.prompt("Enter your name");
// }

// console.log(`Hello ${username}`);

//do while loop - repeat some code WHILE some condition is true

// let loggedIn = true;
// let username;
// let password;

// while(!loggedIn);{
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if(username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("Login successful");
//     } else {
//         console.log("Invalid credentials");
//     }
// }

// do {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if(username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("Login successful");
//     } else {
//         console.log("Invalid credentials");
//     }
// } while(!loggedIn);

// for loop - repeat some code LIMITED amount of times 

// for(let i = 10; i > 0; i--) {
//      console.log(`${i}`);
// }

// console.log("Happy chritmas!");

// Number Gussing Game 

// const minNum = 1;
// const maxNum = 100;

// let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


// let attempts = 0;
// let guess;
// let running = true;

// while(running) {
//      guess = (window.prompt(`Guess a number between ${minNum} and ${maxNum}`));
//      guess = Number(guess);
//      if(isNaN(guess)) {
//         window.alert(`Please enter the valid number`);
//      } else if(guess < minNum || guess > maxNum) {
//         window.alert(`Please enter a number between ${minNum} and ${maxNum}`);23
//      } else {
//         attempts++;
//         if(guess < answer) {
//             window.alert(`TOO LOW! TRY AGAIN`);
//         } else if(guess > answer) {
//             window.alert(`TOO HIGH! TRY AGAIN`);
//         } else {
//             window.alert(`Congratulations! You guessed the number in ${attempts} attempts`);
//             running = false;
//         }
//      }
// }

// Functions :- a section of reusable code.
// declare code once, use it whenever you want
// call the function to execute that code

// function happyBirthday(username, age) {
//     console.log("happyBirthday to you!!!");
//     console.log("happyBirthday to you!!!");
//     console.log(`happyBirthday dear ${username}`);
//     console.log("happyBirthday to you!!!");
//     console.log(`you are ${age} years old`);
// }

// happyBirthday("navin", 25);
// happyBirthday("thiloth", 26);

// function add(x, y) {
//     // let result = x + y;
//     // return result;
//     return x + y;    
// }
// function sub(x, y) {
//     // let result = x + y;
//     // return result;
//     return x - y;    
// }
// function mul(x, y) {
//     // let result = x + y;
//     // return result;
//     return x * y;    
// }
// function div(x, y) {
//     // let result = x + y;
//     // return result;
//     return x / y;    
// }

// function isEven(number) {
//     // if(number % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//      return number % 2 === 0 ? true : false;
// }


// function isValidEmail(email) {
//     // if(email.includes("@")) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return email.includes("@") ? true : false;
// }

// let answer = add(10,20);
// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(isEven(7));

// console.log(isValidEmail("thiloth@gmail.com"));
// console.log(isValidEmail("navinmeta.com"));


// Arrays - Varaible like structure that can hold more than 1 value 

// let fruits = ["apple", "orange", "kiwi", "mango", "banana"];

// console.log(fruits);

// fruits.push("coconut");

// fruits.pop();

// fruits.unshift("coconut");

// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");

// console.log(numOfFruits);
// console.log(index);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Spread operator, rest parameter


// spread operator  ...allows a iterable such as  an array or string to be expanded into seperate elements 

// let numbers = [1,2,3,4,5];

// let maxNums = Math.max(...numbers);
// let minNums = Math.min(...numbers);

// console.log(maxNums);
// console.log(minNums);


// let username = "Thiloth Student";

// let letters = [...username].join("-")

// console.log(letters);

// let fruits = ["apple", "banana", "orange"];

// let veggies = ["Tomato", "Brinjal", "Potato"]

// let foods =[...fruits, ...veggies, "eggs, milks"];

// console.log(foods);


// rest parameters - ...rest allow a function work with a varaiable number of argummnets by bundling them into an array


// function openFridge(...foods) {
//    console.log(...foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// let food1 = "dosa";
// let food2 = "puri";
// let food3 = "lemon rice";
// let food4 = "idly";

//openFridge(food1, food2, food3, food4);



// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// function sum(...numbers) {

//     let result = 0;
//     for(let number of numbers) {
//      result += number;
//     }
//     return result;
// }

// const total = sum(1, 5, 10, 20);

// console.log(`Your total is ${total}`);


// ES6 features in js

// Callbacks - function that is passed as an argument to another function.


// used to handle asynchronous operations
// reading a file 
// Network requests
// interating with db

// hey, when you are done, call this next

// hello(wait);


// function hello(reciver) {
//     console.log("hello");
//     reciver();
// }

// function leave() {
//     console.log("leave");
// }

// function wait() {
//   console.log("wait");   
// }

// function goodbye() {
//     console.log("Goodbye!!!");
// }


// sum(displayDOM, 10, 20);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//      console.log(result);
// }


// function displayConsole(result) {
//      console.log(result);
// }


// function displayDOM(result) {
//      let element = document.getElementById("myH1").textContent = result;

// }

// foreach() = method used to iterate over the elements of an array and apply a specified functions(callback) to each elements


// array.forEach(callback)

// element, index, array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.forEach(square);
// numbers.forEach(double);
// numbers.forEach(display);


// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }

// function display(elements) {
//     console.log(elements);    
// }



// let fruits = ["apple", "orange", "banana"];

// // fruits.forEach(upperCase);
// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//    array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(2);
// }

// function display(element) {
//     console.log(element);
// }


// STATIC keywords - Keyword that defines the properties and methods that belong to a class itself rather than the objects created from the that class (class owns anything, not the objects)


// class MathUtil {
//     static PI = 3.14159;

//     static GetDiaameter(radius) {
//         return radius * 2;
//     }

//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }


// console.log(MathUtil.PI);
// console.log(MathUtil.GetDiaameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User {
//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello() {
//         console.log(`Hello, my username ${this.username}`)
//     }

//     static getUserCount() {
//         console.log(`There are ${User.userCount} users online`);
        
//     }

// }

// const user1 = new User("john");
// const user2 = new User("Thiloth");
// const user3 = new User("Navin");


// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// User.getUserCount();

// console.log(User.userCount);



// inheritance -  allow a new class to inherit properties and methods from an exiting class (Parent -> Child)

//(help with code reusability)

// class Animals {
//     alive = true;
//     eat() {
//         console.log("I am eating");
//     }
//     sleep() {
//         console.log("I am sleeping");
//     }
// }

// class Rabbit extends Animals {
//     name = "rabbit"
//     run() {
//         console.log(`${this.name} is running`);
//     }
// }
// class Fish extends Animals {
//     name = "fish"
//     swim() {
//         console.log(`${this.name} is swimming`);
//     }
// }
// class Parrot extends Animals {
//     name = "parrot"
//     fly() {
//         console.log(`${this.name} is flying`);
//     }
// } 

// const rabbit = new Rabbit();
// const fish = new Fish();
// const parrot = new Parrot();



// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();
// fish.swim()
// parrot.fly();



// super - keyword is used in classes to call the constructor or access the properties and methods of a parent .
//   this = object
//   super = the parent

// benefits of using the constructor if there is any property that the clildren all sharing in common we can sed them to the constructorof the parent

// using super keyword we can extend a method from the parent.


// class Animals {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     alive = true;
//     eat() {
//         console.log("I am eating");
//     }
//     sleep() {
//         console.log("I am sleeping");
//     }
//     move(speed) {
//         console.log(`The ${this.name} is moves at a speed of ${speed}  mph`);
//     }
// }

// class Rabbit extends Animals {
//     constructor(name, age, runSpeed) {
//         super(name, age);  // calling parent constructor
//         this.runSpeed = runSpeed;
//     }
//     name = "rabbit"
//     run() {
//         console.log(`${this.name} is running`);
//         super.move(this.runSpeed);
//     }


// }
// class Fish extends Animals {
//     constructor(name, age, swimSpeed) {
//         super(name, age);  // calling parent constructor
//         this.swimSpeed = swimSpeed;
//     }
//     name = "fish"
//     swim() {
//         console.log(`${this.name} is swimming`);
//         super.move(this.swimSpeed);
//     }
// }
// class Parrot extends Animals {
  
//     constructor(name, age, flySpeed) {
//         super(name, age);  // calling parent constructor
//         this.flySpeed = flySpeed;
//     }

//     name = "parrot"
//     fly() {
//         console.log(`${this.name} is flying`);
//         super.move(this.flySpeed)
//     }
// } 


// const rabbit = new Rabbit("Fluffy", 2, 25);
// const fish = new Fish("nemo", 3, 12);
// const parrot = new Parrot("ram", 1, 30);

// console.log(rabbit.alive);

// rabbit.eat();

// rabbit.sleep();

// rabbit.run();
// fish.swim();
// parrot.fly();

// getter and setter


// getter - special method that makes a property readable
// setters - special method that makes a property writable


// validate and modify a value when reading/writing a property 

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newwidth) {
//         if(newwidth > 0) {
//             this._width = newwidth;
//         } else {
//             console.error("width must be +ve num");
            
//         }
//     }
//     set height(newheight) {
//         if(newheight > 0) {
//             this._height = newheight;
//         } else {
//             console.error("height must be +ve num");
            
//         }
//     }

//     get width() {
//         return `${this._width.toFixed(2)} cm`;
//     }
//     get height() {
//         return `${this._height.toFixed(2)}cm`;
//     }

//     getArea() {
//         return (this._width * this._height).toFixed(2);
//     }

// }

// const rectangle = new Rectangle(3, 4);


// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.getArea());





// Class Shape {
   
// }

// child 
// square() - proprties and methods
// circle() - proprties and methods
// cylinder() - proprties and methods



// class Person {
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     set firstname(newFirstName) {
//         if(typeof newFirstName === "string" && newFirstName.length > 0)  {
//              this._firstname = newFirstName;
//         } else {
//             console.error("Invalid firstname, it must be non-empty string"); 
//         }
//     }
//     set lastname(newLastName) {
//         if(typeof newLastName === "string" && newLastName.length > 0)  {
//              this._lastname = newLastName;
//         } else {
//             console.error("Invalid LastName, it must be non-empty string"); 
//         }
//     }

//     set age(newAge) {
//         if(typeof newAge === "number" && newAge >= 0)  {
//              this._age = newAge;
//         } else {
//             console.error("Invalid age, it must be a positive num"); 
//         }
//     }
 
//     get firstname() {
//         return this._firstname;
//     }
//     get lastname() {
//         return this._lastname;
//     }
//     get age() {
//         return this._age;
//     }
    
// }


// const person = new Person("thiloth", "ram", 28);

// console.log(person.firstname, person.lastname, person.age);


























// Destructing - extract values from arrays and objects then assign them to variables in a convenient way .

// [] - to perform array destructuring

// {} - to perform object destructuring


// swap the values of two variable

// let a = 10;

// let b = 20;

// [a, b] = [b, a];

// console.log(a);

// console.log(b);


// swap 2 two elements in array 

// const colors = ["red", "green", "blue", "yellow", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// assign array elements to variables 
// that how to assign array elements to varaibles using destrcturing

// const colors = ["red", "green", "blue", "yellow", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);

// console.log(secondColor);

// console.log(thirdColor);

// console.log(extraColors);

// Extract values from objects 

// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     job: "Cook",
// }
// const person2 = {
//     firstName: 'Ram',
//     lastName: 'siva',
//     age: 27,
// }


// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// const {firstName, lastName, age, job = "unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// Destructure in function parameters 


// function displayPerson({firstName, lastName, age, job}) {
//      console.log(`${firstName} ${lastName}`);
//      console.log(`${age}`);
//      console.log(`${job}`);   
// }

// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     job: "Cook",
// }
// const person2 = {
//     firstName: 'Ram',
//     lastName: 'siva',
//     age: 27,
// }


// displayPerson(person2);


// nested objects - objects inside of other object.

// allows us to represent more complex data structures
//  child object is enclosed by parent object

// person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// array of objects 

// const friuts = [{name: "apple", color: "red"}, {}, {}, {}, {}, {}, {}]

// sorting























































































































































































