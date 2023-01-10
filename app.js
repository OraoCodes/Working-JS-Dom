console.dir(document);
document.body.children[1].children[0].children[0].children[0].href = 'https://www.google.com/';

//alternatively we can use utility functions

let anchorElement = document.getElementById('anchor-tag');
anchorElement.href = "https://zemuldo.com/";