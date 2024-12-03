// A form submission system needs to check if a user agreed to the terms and conditions.
const user = "is_greed"
function isAgreed(){
    if (user==="is_agreed"){
        return "The User has agreed"
    }
    else{
        return "Nope"
    }
}
isAgreed();
console.log(isAgreed());
