// const tinderuser = new Object() singleton
const tinderuser = {} //non singleton
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false
// console.log(tinderuser);


const regularuser={
    email:"dvsd@gmail.com",
    fullname:{
        usernamefull:{
            firstname:"dfdv",
            lastname:"sfcs"
        }
    }
}
// console.log(regularuser.fullname?.usernamefull.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj4={
    5:"a",
    6:"b"
}

// const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"fvdc@gmail"
    },
    {
        id:2,
        email:"fvd@gmail.com"
    }
]
// console.log(users[0].email);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// // length
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('islogged'));
// console.log(tinderuser.hasOwnProperty('isloggedin'));

const course ={
    coursename:"js",
    price:"999",
    mentor:"azv"
}
// course.mentor
const {mentor:profsor}=course
console.log(profsor);

// const navbar= ({company}) => {

// }
// navbar(company="as")


// {
//     "name":"dfbxdgf"
//     "coursename":"js"
//     "price":"free"
// }
[
    {},
    {},
    {}
]