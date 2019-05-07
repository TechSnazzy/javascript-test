let timeAllowed = 120;
let javaScript = 50;
let html = 20;
let css = 20;

let study =
  javaScript + html + css >= timeAllowed
    ? 'You are a master web developer now!'
    : javaScript >= 40 && html >= 40 && css >= 40
    ? 'For sure you have to know this by now.'
    : javaScript >= 40 || html >= 40 || css >= 40
    ? 'At least you know something.'
    : 'You should keep studying.';

console.log(study);