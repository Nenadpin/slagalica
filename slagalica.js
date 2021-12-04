<<<<<<< HEAD
const rolText=document.getElementById('tekst')
const Slika = document.getElementById('slika')
const igraDisplay = document.getElementById('igra')
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
Slika.addEventListener('click', skocko)
function tableCreate() {
    const body = document.body,
          tbl = document.createElement('table');
          tbl.style.width = '100%';
          tbl.style.height='80vw';

  
    for (let i = 0; i < 6; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
        }
      }
    body.appendChild(tbl);
  }
  
function skocko(){
    rolText.style.display='none'
    Slika.style.display='none'
    igraDisplay.style.display-"block"
    tableCreate();
}
=======
const rolText = document.getElementById("tekst");
const Slika = document.getElementById("slika");
const igraDisplay = document.getElementById("igra");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");

let tekst1 = rolText.innerText + " ";
let radi = false;
let tajmer = null;

Slika.addEventListener("mouseover", function () {
  tajmer = setInterval(function () {
    tekst1 =
      tekst1.substring(tekst1.length - 1, tekst1.length) +
      tekst1.substring(0, tekst1.length - 1);
    rolText.innerHTML = tekst1;
    radi = true;
  }, 500);
});
Slika.addEventListener("mouseleave", function () {
  clearInterval(tajmer);
  radi = false;
});
Slika.addEventListener("click", skocko);

function skocko() {
  const body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "100%";
  tbl.style.height = "80vw";

  for (let i = 0; i < 6; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 8; j++) {
      const td = tr.insertCell();

      td.style.border = "1px solid black";
    }
  }
  body.appendChild(tbl);
  rolText.style.display = "none";
  Slika.style.display = "none";
  igraDisplay.style.display = "block";
}
btn1.addEventListener("click", function () {
  console.log("konacno");
});
>>>>>>> 8514457935f6fa9cfa0cc0ccb58ec4d236a8b78d
