let hello:string = "hello";
// error >> hello = 4;
const plus = (a:number,b:number) => a+b;

const greet = (name:string,age:number) => {
    return `Hello ${name} you are ${age} years old`     
}
/* const greet = (name:string,age:number) : string{
    return name >> age면 오류     
}*/
// console.log(greet("choi",25));   >>  Hello choi you are 25 years old

// interface
const choi = {
    name: 'choi',
    age:18,
    hungry:true
}

const jung = {
    name:'jung',
    hungry:false
}

interface IHuman{
    name:string,
    age?:number, // ?는 optinal value
    hungry:boolean
}

const helloToHuman = (human:IHuman) => {
    console.log(`Hello ${human.name} your ${human.age}`)
}

helloToHuman(choi);
// helloToHuman(jung); >> error interface에 없었기 때문에 안되지만 ?로 undefined로 출력은 됨