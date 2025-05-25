const user ={
    username:"hitesh",
    price:999,

    welcomemessage: function() {
        console.log(`${this.username} welcome `);
        console.log(this);
        
    }

}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this);


// function chai(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()
// const chai =function() {
//     let username="hitesh"
//     console.log(this.username);
// }


const chai =() => {
    let username="hitesh"
    console.log(this);
}
// chai()

// const add2 = (num1,num2)=>{
//     return num1+num2
// }
// const add2 = (num1,num2)=> num1+num2
// const add2 = (num1,num2)=> (num1+num2)
const add2 = (num1,num2)=> ({username:"hitesh"})
console.log(add2(3,4));
const myarray=[2,3,4,5]
// myarray.forEach()