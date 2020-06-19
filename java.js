var maintag = document.createElement('main');
document.body.prepend(maintag);

var img = document.createElement('img'); 
img.setAttribute('src', 'https://www.thesprucepets.com/thmb/aB6Dj_ZD9iulkqn7wzFynzFuz5Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg');
maintag.appendChild(img)

var anchor = document.createElement('a');
anchor.setAttribute('href', "https://www.google.com/");
anchor.innerText = 'google';
maintag.appendChild(anchor);

var bttn = document.createElement('button');
bttn.innerHTML = 'click me';
document.body.prepend(bttn);

bttn.addEventListener('click', function(){
    maintag.remove();
});