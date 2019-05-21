var xHello = document.getElementById('hello');

xHello.innerHTML += ',<span style="color: red;"> Hello World</span>';

xHello.outerHTML += '<h2>OUTER HTML</h2>';

var yHello = document.querySelectorAll('li')[0];

yHello.innerHTML = 'WHAT?';
