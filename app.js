const w = 20;
function roll() {
    document.getElementById('dice').innerHTML= Math.floor(Math.random()*w)+1;
    document.getElementById('w').innerHTML=`you're rolling a W ${w}`;
}

// function wIndicator() {
//     document.getElementById('w').innerHTML=`you're rolling a W ${w}`;
// }

