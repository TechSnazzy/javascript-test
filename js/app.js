var h1 = document.getElementById('h1-style');
var h2 = document.getElementById('h2-style');
var button = document.getElementById('btn');

h1.style.cssText =
  ' background:#202020; width:80%; height: 100px; text-align:center; ';
h2.style.cssText =
  ' background:#202020; width:80%; height: 100px; text-align:center; ';

// button.onclick = function(e) {
//   console.log(e);
// };

button.addEventListener('click', function(e) {
  button.style.background = 'orangered';
  button.textContent = 'OrangeRed';
});
