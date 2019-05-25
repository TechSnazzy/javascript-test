/*
A function is passed into another function.
Then after something has happened, that function is invoked.
For example...

setTimeout(function() {
  console.log('Callback function!');
}, 3000);
*/

let btn = document.querySelector('#btn');

// addEventListener takes a callback function
btn.addEventListener('click', function(e) {
  console.log('The button was clicked.');
});
