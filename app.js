console.dir(document);
document.body.children[1].children[0].children[0].children[0].href = 'https://www.google.com/';

//alternatively we can use utility functions

let anchorElement = document.getElementById('anchor-tag');
anchorElement.href = "https://zemuldo.com/";

//insert DOM elements

let newSection = document.createElement('div');
let newParagraph = document.createElement('a');

newParagraph.textContent = 'I have been inserted';

let existingBody = document.querySelector('body');

existingBody.append(newSection, newParagraph);

//removing an element.
newSection.remove();

console.log(newParagraph.parentElement.removeChild(newParagraph)); //for older browsers seems to be taking alot of time.


