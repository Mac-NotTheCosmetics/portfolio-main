//Footer//
//Source: https://www.w3schools.com/js/js_dates.asp//
const d = new Date() 
document.getElementById("date").innerHTML = d;

//Alert//
function btnAlert() {
  alert('Hi');
  console.log('The page says "Hi"')
}

//Hover//
document.getElementById('hoverButton').onmouseover = () => {
    document.getElementById('hoverButton').innerText = 'You have been bamboozled lol';
};

document.getElementById('hoverButton').onmouseleave = () => {
    document.getElementById('hoverButton').innerText = 'Hover me to get 1 million dollars!!!!!';
}

//Increment//
let count = 0
document.getElementById('btnCounter').onclick = () => {
  count = count + 1;
  document.getElementById('txtCounter').innerHTML = count
}
