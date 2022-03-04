// const result = fetch(url);

// console.log(result);

// function convertToJs(result) {
//     if (result.ok) {
//         return result.json();
//     }
// }

// const results = fetch(url).then(convertToJs);

// console.log(results);


// const url = "https://learnwebcode.github.io/json-example/animals-1.json";
// fetch(url).then((result) => {
//         if (result.ok) {
//             return result.json();
//         } else {
//             alert("Something went wrong");
//         }
//     })
//     .then((data) => {
//         console.log(data[2].name);
//         document.querySelector("main").innerHTML = data[1].name;
//     });


const url = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json"
fetch(url).then((result) => {
    if (result.ok) {
        return result.json();
    } else {
        alert("something went wrong");
    }
}).then((data) => {
    console.log(data);
    document.querySelector("img").setAttribute("src", data.prophets[0].imageurl);
    document.querySelector("img").setAttribute("src", data.prophets[0].imageurl);
    // console.log(data.prophets[0].name);
});