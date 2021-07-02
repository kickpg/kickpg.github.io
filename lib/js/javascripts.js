var img = document.getElementById('img');

var imgs = ['./lib/img/hinh4.jpg','./lib/img/hinh5.jpg']
var x = 0;


let timerId = setTimeout(function slide() {
    if (x < imgs.length) {
        x = x+1;
    }
    else{
        x = 1;
    }
    img.setAttribute('src',imgs[x-1]); 
    timerId = setTimeout(slide,3000)
},3000);




