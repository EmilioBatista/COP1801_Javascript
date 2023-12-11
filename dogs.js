// Object created using object literal (myDog)
let myDog = {
    name: "Scooby Doo",
    show: "Scooby-Doo, Where Are You!",
    breed: "Great Dane",
    role: "Protagonist",
    mySound: "I might sound goofy but I am very brave in my heart",
    // Displaying the contents of the object in a descriptive message
    describeDog: function() {
        return `Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. ` +
               `My character was a ${this.breed}. I was the ${this.role} in a cartoon about solving mysteries.`;
    }
};

// Display the dog’s information using the describeDog method
console.log(myDog.describeDog());
// Constructor for creating a dog object
function DogConst(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;
    // Method to display greeting
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. ` +
               `My character was a ${this.breed}. I was the ${this.role} in a cartoon about solving mysteries.`;
    };
}

// Creating an object using the constructor
let myDogConst = new DogConst("Scooby Doo", "Scooby-Doo, Where Are You!", "Great Dane", "Protagonist",
                              "I might sound goofy but I am very brave in my heart", true);

// Display the greeting using the object’s method
console.log(myDogConst.myGreeting());
