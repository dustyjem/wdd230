// const requestURL = "directory.json"
// const cards = document.querySelector('section');


// fetch(requestURL)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonObject) {
//         const businesses = jsonObject['businesses'];
//         // console.table(jsonObject);
//         businesses.forEach(displayBusinesses);

//     });

// function displayBusinesses(business) {
//     let card = document.createElement('section');

//     //img
//     let image = document.createElement('img');
//     image.src = business.imgfile;
//     image.setAttribute('alt', business.name);
//     card.appendChild(image);

//     //h2 name
//     let h2 = document.createElement('h2');
//     h2.textContent = business.name;
//     card.appendChild(h2);

//     //p address
//     let p1 = document.createElement('p');
//     p1.textContent = business.address;
//     card.appendChild(p1);

//     //p phone
//     let p2 = document.createElement('p');
//     p2.textContent = business.phone;
//     card.appendChild(p2);

//     //p website
//     let p3 = document.createElement('p');
//     p3.textContent = business.website;
//     card.appendChild(p3);

//     cards.appendChild(card);
// }