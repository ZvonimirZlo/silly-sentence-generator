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

//Returns random item from the array
const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}


//Sentence generator function
const changeSentence = () => {

//Final sentence
    return `Nobody Expects the ${randomizer(nation)} Inquisition!!! Our four weapons are ${randomizer(fruits)}, ${randomizer(animals)}, ${randomizer(bands)}, and an almost fanatical devotion to ${randomizer(companies)}.`;
}


//Prints the sentence on the screen
button.addEventListener("click", () => {
    sentenceContainer.innerHTML = `<h3>${changeSentence()}</h3>`;
})



