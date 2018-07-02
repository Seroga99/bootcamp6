const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

do {
    let pass = prompt('Enter your password');
    if (pass === 'qwerty' || pass === '111qwe' || pass === '123123' || pass === 'r4nd0mp4zzw0rd') {
        alert('Welcome')
        attempts = -1;
    }
    else if (pass === null) {
        alert("Goodbuy")
        attempts = -1;
    }
    else {
        attempts -= 1;
        let n = attempts;
        if (attempts >= 1) {
            alert(`Wrong password, you have ${n} attempts left`);
        }
        if (pass === 'qwerty' || pass === '111qwe' || pass === '123123' || pass === 'r4nd0mp4zzw0rd') {
            let pass = prompt('Enter your password');
            alert('Welcome')
            attempts = -1;
        }
    }
}
while (attempts > 0);
if (attempts === 0) {
    alert("You have run out of account, your account is locked!");
}

