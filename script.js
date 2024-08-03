// add an event listener to the myBox element that changes the background color of the box to blue when clicked.
// The box should change to blue when clicked.
// the box will be able to change to different colors after being clicked multiple times.


const myBox = document.querySelector('#myBox');
myBox.addEventListener('click', function() {
  myBox.style.backgroundColor = 'red';
  myBox.innerText = "Don't click me! 😣";
});

// now the box will change colour and text on hover, when this happens the box will change to blue when the mouse is hovering over and the text will change to "Wow that's a cool mouse! 😎"

myBox.addEventListener('mouseover', function() {
  myBox.style.backgroundColor = 'green';
  myBox.innerText = "Do it 😎";
});