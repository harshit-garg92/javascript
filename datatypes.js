// primitive

/*string
number
boolean
null
undefined
symbol
bigint
*/ 

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);

/*refernce or non primitive
objects
array
function

*/ 

const hero=["shakti","super","doga"]
let myobj={
    name:"harsh",
    age:22,
}
const mufunc=function(){
    console.log("hello");
    
}
console.log(typeof mufunc);
console.log(typeof hero);