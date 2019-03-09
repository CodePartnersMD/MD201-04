// Create a variable called msg to hold a new message
var msg = 'We are now learning about basic functions ...';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

// Call the function
updateMessage();