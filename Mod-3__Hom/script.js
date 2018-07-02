const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let Log = prompt("Enter your password")
function checkLoginValidity(login) {
    if (Log.length >= 4 && Log.length <= 16) {
        return true;
    }
    else {
        return false;
    }
}
function checkIfLoginExists(Logins, login) {
    for (let el of logins) {
        if (el === Log) {
            return true;
        }
        else {
            return false;
        }
    }
}
function addLogin(Logins, login) {
    if (checkLoginValidity(Log) === false) {
        alert('Error! Login must be from 4 to 16 characters');
    }
    else if (checkLoginValidity(Log) === true) {
        if (checkIfLoginExists() === false) {
            logins.push(Log);
            alert('Login successfully added!');
        }
        else if (checkIfLoginExists() === true) {
            alert(
                'This login is already in use!');
        }
    }
}
addLogin(logins, Log);
console.log(logins);

