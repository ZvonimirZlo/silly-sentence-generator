//Arrays of possible sentence inputs
const national = ["American", "English", "German", "Croatian", "Australian"];
const fruits = ["bananas", "apples", "oranges", "lemons"];
const animals = ["rabbits", "cats", "goats", "snails","dragons"];
const bands = ['Rolling Stones', 'Metallica', 'AC/DC', 'Rammstein'];
const companies = ["Microsoft", "Google", "Apple", "McDonald's"];


//extracts random words from arrays
let nat = national[Math.floor(Math.random() * national.length)];
let fru = fruits[Math.floor(Math.random() * fruits.length)];
let ani = animals[Math.floor(Math.random() * animals.length)];
let ban = bands[Math.floor(Math.random() * bands.length)];
let com = companies[Math.floor(Math.random() * companies.length)];

//final sentence
let sentence = `Nobody Expects the ${nat} Inquisition!!! Our four weapons are ${fru}, ${ani}, ${ban}, and an almost fanatical devotion to ${com}.`

const btn = document.getElementById('btn');
let cont = document.getElementById('cont');

//prints the sentence on the screen
btn.addEventListener('click', () => {
    let text = document.createElement('h1');
    text.innerHTML = sentence;
    cont.appendChild(text);
})




//console.log(sentence);