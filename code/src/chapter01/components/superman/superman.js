// NOTE: Using webapck
require('./superman.scss');
// Load the template in the body
document.body.innerHTML = require("./superman.html") + document.body.innerHTML;

// Retrieve the markup
var supermanTemplate = document.querySelector('.superman');
var supermanContent = supermanTemplate.content;
// Add the img picture
var supermanPicture = document.createElement('img');
supermanPicture.classList.add('animated_superman');
supermanPicture.src = require("../../assets/img/superman.png");
supermanPicture.width = 500;
supermanContent.querySelector('.boomshakalaka').appendChild(supermanPicture);
// Import it to the document, don't forget the 2nd argument
var result = document.importNode(supermanContent, true);
document.body.appendChild(result);

