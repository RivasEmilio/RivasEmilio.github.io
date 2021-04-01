var text = document.getElementById('text');
var shadow = '';
for (let index = 0; index < 19; index++) {
    
    shadow +=(shadow? ',':'')+index*1+'px '+ index*1+'px 0 #838383';
}
text.style.textShadow = shadow;
