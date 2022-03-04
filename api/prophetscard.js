// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// fetch(requestURL)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonObject) {
//         console.table(jsonObject); // temporary checking for valid response and data parsing
//         const prophets = jsonObject['prophets'];
//         prophets.forEach(displayProphets);
//     });

// function displayProphets(prophet) { // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2'); // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.textContent = prophet.name + ' ' + prophet.lastname;
//     let dob = document.createElement('p'); // Change the textContent property of the dob element to contain the prophet's date of birth
//     let pob = document.createElement('p'); // Change the textContent property of the pob element to contain the prophet's place of birth
//     let pimges = document.createElement('img'); // Change the src property of the img element to contain the prophet's image
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card);
// }

const requestURL =
    "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        // console.table(jsonObject);
        const prophets = jsonObject["prophets"];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let dob = document.createElement("p");
            let pob = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            dob.textContent = prophets[i].birthdate;
            pob.textContent = prophets[i].birthplace;
            image.setAttribute("src", prophets[i].imageurl);
            image.setAttribute(
                "alt",
                prophets[i].name +
                " " +
                prophets[i].lastname +
                " - " +
                prophets[i].order
            );

            card.appendChild(h2);
            card.appendChild(dob);
            card.appendChild(pob);
            card.appendChild(image);

            document.querySelector("div.cards").appendChild(card);
        }
    });