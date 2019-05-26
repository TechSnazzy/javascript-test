/*
1. Start out with an array.
2. Then create a forEach that takes a callback function.
3. Type `node app.js` to execute in terminal.
*/

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

months.forEach(function(m, index) {
  console.log(`Month ${index + 1} is ${m}`);
});
