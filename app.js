console.dir(document);

//manipulate DOM 
//set link to href in the html file
//long method - drilling into the DOM
document.body.children[1].children[0].href = "https://www.google.com";

//short method - using utility function

document.getElementById('link').href = 'https://www.twitter.com';
//or
let anchorElement = document.getElementById('link');
anchorElement.href ='https://www.facebook.com';

//Using query Selectors. (Basically uses a css)
let secondAnchorElement = document.querySelector('#link');
secondAnchorElement.href = "https://www.instagram.com";

//training Exercise
//get h1 by drilling into the DOM
let h1Element = document.body.firstElementChild;
console.dir(h1Element);

//using the variable to get parent of h1Element
let parentElement = h1Element.parentElement;
console.dir(parentElement);

//using the element h1Element - find the sibling Element
let siblingElement = h1Element.nextElementSibling;
console.dir(siblingElement);

//using identifier utility functions - getElementById
let h1Element2 = document.getElementById('h1-element');
console.dir(h1Element2)

//selecting an element using a query selector
let paragraphElement = document.querySelector('p');
console.log(paragraphElement);

//changing the textContent of the paragraph
paragraphElement.textContent = 'This is a changed text';

//DOM CRUD. - Manipulation 2

//Adding an new element
//1. create the element
//2. get access to the parent element that is to hold the new element
//3. Insert the newly created element in the parent Element

let newAnchorElement = document.createElement('a');
let paragraphElement2 = document.querySelector('body');

newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = ' this leads to google';

paragraphElement2.append(newAnchorElement);

//removing elements
//1. identify the element to be removed
//2. call the remove function on the identified element

let removableParagraph = document.getElementById('p1');
removableParagraph.remove();

//for older Browsers.
//removableParagraph.parentElement.removeChild(removableParagraph); - //boringly redudant

//Moving Elements across
h1Element2.parentElement.append(h1Element);

//innerHTML - allows you to add html from DOM to the html
h1Element2.innerHTML = '<i>there</i>'

//Adding event listeners
function changeH1ParagraphText(){
    h1Element2.textContent = 'clicked';
    console.log('paragraph clicked');
}

h1Element2.addEventListener('click', changeH1ParagraphText);

//listening to an input put by the user.
let inputElement = document.querySelector('input');

function retrieveUserInput(){
    let enteredText = inputElement.value;
    console.log(enteredText)
}

inputElement.addEventListener('input', retrieveUserInput);