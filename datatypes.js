// primitive

/*string
number
boolean
null
undefined
symbol
bigint
*/ 

// const id=Symbol('123')
// const anotherid=Symbol('123')

// console.log(id===anotherid);

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
// console.log(typeof mufunc);
// console.log(typeof hero);






// stack(primitive),heap(nonprimitiv)
let myname="harsh"
let anothername=myname
anothername="fgxbdsf"
// console.log(anothername);
// console.log(myname);
let user1={
    email:"dfzdvf@f.com",
    upi:"user@dsrv",
}
let user2=user1
user2.email="harsh@fv"
console.log(user1.email);
