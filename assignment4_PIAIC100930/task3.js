// Write a program to take password as an input from user.
// Thepassword must qualify these requirements: 
//     a.It should contain alphabets and numbersb.
//     It should not start with a numberc.
//     It must at least 8 characters longd.
//     If the password does not meet the above requirements, 
//     prompt the user to enter a valid password.
//     For character codes of a - z, A - Z & 0 - 9


let password = prompt("Enter your password: ");


const checkPassword = (pass) => {
    let firstChar = pass.charAt(0);
    if (!firstChar.match(/^[a-zA-Z]+$/)){
        alert('First character should be Alphabet.');
    } else if (!pass.match(/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/)) {
        alert('Password should contain Alphabets and Numbers and min 8 characters');
    } else{
        return true
    }
}

checkPassword(password);



