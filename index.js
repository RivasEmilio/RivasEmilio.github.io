var text = document.getElementById('text');
var shadow = '';
for (let index = 0; index < 19; index++) {
    
    shadow +=(shadow? ',':'')+index*1+'px '+ index*1+'px 0 #838383';
}
text.style.textShadow = shadow;

var text2 = document.getElementById('text2');
var shadow2 = '';
for (let index = 0; index < 5; index++) {
    
    shadow2 +=(shadow2? ',':'')+index*1+'px '+ index*1+'px 0 #5D5D5D';
}
text2.style.textShadow = shadow2;
