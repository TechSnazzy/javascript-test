/*
A function is passed into another function.
Then after something has happened, that function is invoked.
*/

setTimeout(function() {
  console.log('Callback function!');
}, 3000);
