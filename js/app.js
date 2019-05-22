var el = document.getElementById('style');
var body = document.getElementById('main-body');

el.style.background = 'blue';
el.style.color = 'white';
el.style.width = '200px';

el.style.cssText = ' background:blue; width:200px ';
el.style.cssText += ' height: 100px; ';
body.style.cssText = ' background:#303030; color:white; ';

// console.log(getComputedStyle(el));
