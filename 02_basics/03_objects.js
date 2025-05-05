// singleton
// Object.create

// object literals


const sym=Symbol("key1")

const jsuser={
    name:"haha",
    "full name":"fgbdfgb sfdbvd",
    // sym="mykey1",
    [sym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hwsuw@gmail.com",
    isloggedin:false,
    lastlogin:["monday","saturday"]
}

// console.log(jsuser.email)
// // console.log(jsuser[email]);
// console.log(jsuser["email"]);
// // console.log(jsuser.full name)
// console.log(jsuser["full name"])
// console.log(jsuser[sym]);

jsuser.email="hwdsjsl@gmail.com"

// Object.freeze(jsuser)
jsuser.email="hwdsjsl@microsoft.com"

// console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello user");
    
}
jsuser.greeting1 = function(){
    console.log(`hello user,${this.name}`);
    
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greeting1);
console.log(jsuser.greeting1());