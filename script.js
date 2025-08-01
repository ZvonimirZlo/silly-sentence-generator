//Variables
const button = document.getElementById("btn");
const sentenceContainer = document.getElementById("cont");
const form = document.getElementById("form");

//Arrays of possible sentence inputs
const nation = ["American", "English", "German", "Croatian", "Australian", "Hungarian", "Canadian"];
const fruits = ["bananas", "apples", "oranges", "lemons", "watermelons", "papayas"];
const animals = ["rabbits", "cats", "goats", "snails", "dragons", "cows", "aligators", "bears"];
const bands = ["Rolling Stones", "Metallica", "AC/DC", "Rammstein", "Iron Maiden", "Black Sabbath", "Slayer"];
const companies = ["Microsoft", "Google", "Apple", "McDonald's", "Amazon", "NVIDIA", "Netflix"];

//Sentence generator function
const changeSentence = () => {

    //Picks random strings from arrays
    const nationStr = nation[Math.floor(Math.random() * nation.length)];
    const fruitStr = fruits[Math.floor(Math.random() * fruits.length)];
    const animalStr = animals[Math.floor(Math.random() * animals.length)];
    const bandStr = bands[Math.floor(Math.random() * bands.length)];
    const companyStr = companies[Math.floor(Math.random() * companies.length)];

    //Final sentence
    return `Nobody Expects the ${nationStr} Inquisition!!! Our four weapons are ${fruitStr}, ${animalStr}, ${bandStr}, and an almost fanatical devotion to ${companyStr}.`;
}


//Prints the sentence on the screen
button.addEventListener("click", () => {
    sentenceContainer.innerHTML = `<h3>${changeSentence()}</h3>`;
})



