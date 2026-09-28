
let password = document.getElementById("password-el")
let password2 = document.getElementById("password-el2")
let length = document.getElementById("length-el")




let charecter = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", " "
];



console.log(charecter.length)

function randomNum() {
    return Math.floor(Math.random() * charecter.length)
}

function randomNum2() {
    return Math.floor(Math.random() * 62)
}




function generateFn() {
    if (length.value > 5 && length.value < 13) {
        password.textContent = ""
        password2.textContent = ""

        for (let i = 0; i < length.value; i++) {
            password.textContent += charecter[randomNum()]
        }
        for (let i = 0; i < length.value; i++) {
            password2.textContent += charecter[randomNum2()]
        }
    } else {
        console.log("choose correct length")
    }
}


// console.log(password)