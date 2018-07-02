const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let login = prompt("Enter your login");
if (login === ADMIN_LOGIN) {
    let pass = prompt("Enter your ppasword")
    if ( pass === ADMIN_PASSWORD ) {
        alert("Welcome")
    }
    else if (pass !== ADMIN_PASSWORD)
    {
        alert("access denied")
    }
}
else if (login === null) {
    alert("denied by the user")
}
else if (login !== ADMIN_LOGIN) {
    alert("access denied")
}


