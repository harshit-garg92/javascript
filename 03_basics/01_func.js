 function sayname(){
    console.log("dv");
    console.log("dvc");
    console.log("cd");
    
   
 }
// sayname
// sayname()

// function add(num1,num2){
// //            ^parameters
//     console.log(num1+num2);
    

// }

function add(num1,num2){
        // let result=num1+num2
        // console.log("dvdv");
        // return result
        return num1+num2
        console.log("dsfd");
    }
// add()

// add(3,"4")
// add(3,"a")
// add(3,null)
//     ^arguments
const result=add(3,4)

// console.log(result);

function loginusermegg(username="sam"){
    if (!username) {
        console.log("please enter name");
        return
    }
    return `${username} just logged in`
}

// loginusermegg("harsht")
// console.log(loginusermegg("harsht"));

// console.log(loginusermegg());


function calculatecartprice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartprice(200,5223,555,8888));



const user={
    username:"dfsdf",
    prices:199,

}

function handleobj(anyobj) {
    console.log(`username ${anyobj.username} price ${anyobj.price}`);
    
}

// handleobj(user)
// handleobj({
//     username:"sam",
//     price:554
// })

const arr=[200,4,555,8888]
// function 2ndval(getarr){
function secondvalue(getarr){
    return getarr[1]
}
// console.log(secondvalue(arr))
// console.log(secondvalue([111,5555,4444]))

