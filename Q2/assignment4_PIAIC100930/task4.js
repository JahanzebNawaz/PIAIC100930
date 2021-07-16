// Write a program to validate email address with following evaluation
// a. This string must contain @
// b.Ths string must contact chars 
// c.The @must have at least 1 char in front
// d.The string must contain.(dot) after @and at least 1 char.



let email = prompt("Enter your email: ");

// const checkEmail = (email) => {
//     if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//         alert(`InValid Email Address ${email}`);
//     } else {
//         alert("Valid Email!")
//     }
// }

// checkEmail(email);


const checkEmail2 = (email) =>{
    var atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = email.indexOf(".");
    if (dot <= atSymbol + 2) return false;

    if (dot === email.length - 1) return false;
    return true;
}

if(checkEmail2(email)){
    alert(`Valid Email Address ${email}`);
}else{
    alert(`InValid Email Address ${email}`);
}
