// arrow function
const sayHello = (name) => "Hello" + name;

const jung = sayHello();

console.log(jung); 

// Template Literals
`Hello ${name}`
`` != "", ''

// object Destructuring
const human = {
    name = "Jung",
    lastName = "hwan",
    nationality = "korean",
    favFood: {
        breakfast: "Sam",
        lunch:"Don",
        dinner:"Sam + Don"
    }
}


const { name, lastName, nationality:difName, favFood:{dinner, breakfast, lunch} } = human;       // == const name = human.name

console.log(name, lastName, difName, dinner, breakfast, lunch);

//Spread Operator
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = [...days,  ...otherDays, "Sun"];   //=["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"]

console.log(allDays);

//Class

class Human {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

// Class extends
class Baby extends Human {
    cry(){
        console.log("Waaaa");
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
}

const myBaby = new Baby("mini", "me");
console.log(myBaby);

const jung = new Human("Jung", "Hwan");
console.log(jung);

// Array map
// days에 있는 모든 요일의 function 실행

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const addNumber = (day, index) => `#${index + 1} ${day}`;

const smilingDays = days.map(addNumber); 

console.log(smilingDays); // >> #1Mon, #2Tue, #3Wed,...

// Array filter 

const numbers = [2,321,73,2312,321, 213,5,23,213,];

const testCondition = number => number < 15;

const biggerThan15 = numbers.filter(testCondition);

console.log(biggerThan15);

let posts = ["Hi","Hello", "Bye"];

posts = posts.filter(post => post !== "Bye");
console.log(posts);     // ["Hi", "Hello"]

// forEach includes push

let posts = ["Hi","Hello", "Bye"];

posts.forEach(post => console.log(post))    //Hi, Hello, Bye

posts.push("new")       // ["Hi", "Hello", "Bye", "new"]

let greetings = ["Hi", "Howdy", "Suup"];

if(!greetings.includes("Hello")){           // ["Hi", "Howdy", "Suup", "Hello"]
    greetings.push("Hello");
}