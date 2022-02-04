// const list = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     const myItem = input.value;
//     input.value = '';

//     const listItem = document.createElement('li');
//     const listText = document.createElement('span');
//     const listButton = document.createElement('button');

//     listItem.appendChild(listText);
//     listText.textContent = myItem;
//     listItem.appendChild(listButton);
//     listButton.textContent = '❌';
//     list.appendChild(listItem);

//     listButton.onclick = function(e) {
//         list.removeChild(listItem);

//     }

//     input.focus();
// });


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
    let myItem = input.value;
    input.value = '';

    const listBtn = document.createElement('button');
    const listText = document.createElement('span');
    const listItem = document.createElement('li');



    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();
}