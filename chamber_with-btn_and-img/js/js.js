// update = new Date(document.lastModified)
// theMonth = new Date().toLocaleString('en-us', { month: 'long' });
// theMonthNo = update.getMonth()
// theDateNo = update.getDate()
// theDate = new Date().toLocaleString('en-us', { weekday: 'long' });
// theYear = update.getFullYear()
// document.querySelector("#updates").innerHTML = ("Last updated: " + theDate + " " + theDateNo + ", " + theMonth + " " + " " + theYear);

// document.querySelector("#hamburger").addEventListener("click", controlMenu);

// let menu = document.querySelector("#nav-menu");

// function controlMenu() {
//     nav.classlist.toggle("responsive");
// }

function monTues() {
    const datefieldUK = document.querySelector("#today-date"); // for european/family history format with day first.

    // derive the current date using a date object
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    // long, medium, short options ... try them

    datefieldUK.innerHTML = `<span>${fulldateUK}</span>`;
    if (new Date().getDay() == 1 || new Date().getDay() == 2) {
        datefieldUK.innerHTML = `<span>${fulldateUK}</span>`
    } else {
        datefieldUK.innerHTML = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`
    }
}

monTues();
let string = document.lastModified;
document.querySelector("#last-updated").innerHTML = (document.lastModified);

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", showMenu);

function showMenu() {
    nav.classList.toggle("responsive");
}