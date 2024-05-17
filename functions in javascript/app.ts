function myfunction(items:string,quantity: number ){
    let result = `kamran cook${items},${quantity}`
    console.log(result);

}
myfunction("cook biryani",8)

function ali(age: number) {
  if (age >= 18) {

    return "eligible for id card";
  } else if (age < 18 && age >0) {
    return "eligible for b-form";
  } else {
    return "not allowed";
  }
}
console.log(ali(0));


function ali(age:number){
    let kami=191+age
return kami
}
console.log(ali(18));



function myfunc(
  return ans  
    console.log(`${name} ${age}  ${add}`);
} 
myfunc("kami",18,"karachi")

let age = 25
let expiery = 2
if(age >= 18 && expiery ==10){
  console.log("you are eligiable for nic")
}
else if(expiery === 10){
  console.log("your nic expired")
}
else{
  console.log("not valid for nic")
};

function myList(){
  console.log("myList from function")
}
myList()

function Greet(name:string){
  console.log(`hello ${name}`);
}
Greet("Tahir")
Greet("Muhammad Ilyas")
Greet("Muhammad Hassan")

function root(digit:number){
  console.log(digit * digit + digit / digit);
}
root(6)
root(9)

function userInfo(name:string,email:string){
console.log(`my name is ${name} and email ${email}`);
}
userInfo("Tahir","tahir.eng@hotmail.com")

function uber(from:string, to:string){
  console.log(`i am coming from ${from} and going to ${to}`);
}
uber("Karaci","Islamabad")