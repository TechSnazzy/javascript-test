/*
1. Start out with an array.
2. Then create a forEach that takes a callback function.
3. Type `node app.js` to execute in terminal.
*/

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

days.forEach(function(day, index) {
  console.log(`starts with ${index + 1} -- ${day}`);
});
