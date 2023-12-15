// Dog Constructor
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk";
        return `Hello, my name is ${this.name}, ${this.mySound}. ${talkMessage} I starred in the TV show ${this.show}. ` +
               `My character was a ${this.breed}. I was the ${this.role} in a cartoon about solving mysteries.`;
    };
}

// Creating Dog Objects
let scoobyDoo = new Dog("Scooby Doo", "Scooby-Doo, Where Are You!", "Great Dane", "Protagonist",
                        "I might sound goofy but I am very brave in my heart", true);
let snoopy = new Dog("Snoopy", "Peanuts", "Beagle", "Main character",
                     "I am a silent dog, but I express a lot through my actions", false);

// Function to Display Dog Info in Console
function displayDogInfo(dog) {
    for (let property in dog) {
        if (dog.hasOwnProperty(property) && typeof dog[property] !== 'function') {
            console.log(`${property}: ${dog[property]}`);
        }
    }
}

// Prompt User to Select a Dog and Display Information
function promptAndDisplayDogInfo() {
    let selectedDogName = prompt("Enter the name of the dog you want to know about: Scooby Doo or Snoopy");
    let dogInfoElement = document.getElementById('dogInfo');

    if (selectedDogName.toLowerCase() === "scooby doo") {
        dogInfoElement.innerText = scoobyDoo.myGreeting();
        displayDogInfo(scoobyDoo);
    } else if (selectedDogName.toLowerCase() === "snoopy") {
        dogInfoElement.innerText = snoopy.myGreeting();
        displayDogInfo(snoopy);
    } else {
        dogInfoElement.innerText = "Error: The selected dog does not exist in our list.";
    }
}

// Call the function to prompt and display dog info
promptAndDisplayDogInfo();
