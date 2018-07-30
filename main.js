console.log("Heyyy");

// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".

document.querySelector(".article__header").textContent = 
"Welcome to Helen's Blog"

function myFunction () {
let newClass = document.querySelectorAll(".article__header")
console.log(newClass);
    for (let i = 0; i < newClass.length; i++) {
    const currentElement = newClass[i];
    currentElement.classList.add("important");
}
};

myFunction()
