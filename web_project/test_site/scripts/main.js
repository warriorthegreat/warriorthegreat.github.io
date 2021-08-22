var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/下載.jpg') {
      myImage.setAttribute ('src','images/日本料理菜單.jpg');
    } else {
      myImage.setAttribute ('src','images/下載.jpg');
    }
}