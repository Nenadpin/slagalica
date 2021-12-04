const rolText=document.getElementById('tekst')
const Slika = document.getElementById('slika')
const pocetna = document.getElementsByClassName('container')
const igraDisplay = document.getElementById('igra')
const skocko = document.getElementById('skockoImg')
const tref = document.getElementById('trefImg')
const pik = document.getElementById('pikImg')
const karo = document.getElementById('karoImg')
const herc = document.getElementById('hercImg')
const zvezda = document.getElementById('zvezdaImg')
const btnSlika = document.getElementsByTagName('button')
let tekst1 = rolText.innerText + ' '
let radi = false
let tajmer=null

Slika.addEventListener('mouseover', function(){
        tajmer = setInterval(function(){
        tekst1=tekst1.substring(tekst1.length-1,tekst1.length) + tekst1.substring(0,tekst1.length - 1);
        rolText.innerHTML=tekst1;
        radi=true
        },500)})
Slika.addEventListener('mouseleave', function() {
    clearInterval(tajmer);
    radi=false
})
Slika.addEventListener('click', skockoKreni)

function skockoKreni(){
    pocetna[0].style.display='none'
    igraDisplay.style.display="block"
}
skocko.addEventListener('click',function(){
let i=15
btnSlika[i].innerHTML='<img src="1.png">'
btnSlika[i].style.opacity=1
})