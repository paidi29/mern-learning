//--------- Arrow functions----------
console.log("Global Scope:", this)
function greet(){
    console.log("Greet Scope:", this);
}
const greetArrow = () => {
    console.log("This is an arrow function!")
}
greet()
greetArrow()