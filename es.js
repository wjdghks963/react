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