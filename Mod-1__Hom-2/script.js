let sharm = 15;
let hurgada = 25;
let taba = 6;

let neededPlace = prompt("Enter the required amount tickets");

if (neededPlace === null) {
    alert("Goodbuy");
}
else if (neededPlace <= 0 ) {
    alert("Input error")
}
else if (neededPlace <= sharm || neededPlace <= hurgada || neededPlace <= taba ) {
    if (confirm("There is a place in the group: hurgada. Do you wont to be in this group?")) {
        alert("Enjoy your trip in the group")
    }
    else {
        alert("We are very sorry, come again!")
    }
}
else if (neededPlace > hurgada) {
       alert("Sorry, there are not enough places")
}


и