var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/duck-drawing-simple.png') {
      myImage.setAttribute ('src','images/ghosty.png');
    } else {
      myImage.setAttribute ('src','images/duck-drawing-simple.png');
    }
}
