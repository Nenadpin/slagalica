const rolText = document.getElementById("tekst");
const Slika = document.getElementById("slika");
const pocetna = document.getElementsByClassName("container");
const igraDisplay = document.getElementById("igra");
const skocko = document.getElementById("skockoImg");
const tref = document.getElementById("trefImg");
const pik = document.getElementById("pikImg");
const karo = document.getElementById("karoImg");
const herc = document.getElementById("hercImg");
const zvezda = document.getElementById("zvezdaImg");
const btnSlika = document.getElementsByTagName("button");
let i = 6;
let tekst1 = rolText.innerText + " ";
let radi = false;
let tajmer = null;
const zadatak = [];
let pokusaj = [];

for (let j = 0; j < 4; j++) {
  zadatak[j] = Math.floor(Math.random() * 6 + 1);
}
console.log(zadatak);
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
Slika.addEventListener("click", skockoKreni);

function skockoKreni() {
  pocetna[0].style.display = "none";
  igraDisplay.style.display = "block";
}
skocko.addEventListener("click", function () {
  btnSlika[i].innerHTML = '<img src="1.png">';
  btnSlika[i].style.opacity = 1;
  pokusaj.push(1);
  i += 1;
  if (i % 10 === 0) {
    i += 6;
    provera();
    pokusaj = [];
  }
});
tref.addEventListener("click", function () {
  btnSlika[i].innerHTML = '<img src="2.png">';
  btnSlika[i].style.opacity = 1;
  pokusaj.push(2);
  i += 1;
  if (i % 10 === 0) {
    i += 6;
    provera();
    pokusaj = [];
  }
});
pik.addEventListener("click", function () {
  btnSlika[i].innerHTML = '<img src="3.png">';
  btnSlika[i].style.opacity = 1;
  pokusaj.push(3);
  i += 1;
  if (i % 10 === 0) {
    i += 6;
    provera();
    pokusaj = [];
  }
});
karo.addEventListener("click", function () {
  btnSlika[i].innerHTML = '<img src="4.png">';
  btnSlika[i].style.opacity = 1;
  pokusaj.push(4);
  i += 1;
  if (i % 10 === 0) {
    i += 6;
    provera();
    pokusaj = [];
  }
});
herc.addEventListener("click", function () {
  btnSlika[i].innerHTML = '<img src="5.png">';
  btnSlika[i].style.opacity = 1;
  pokusaj.push(5);
  i += 1;
  if (i % 10 === 0) {
    i += 6;
    provera();
    pokusaj = [];
  }
});
zvezda.addEventListener("click", function () {
  btnSlika[i].innerHTML = '<img src="6.png">';
  btnSlika[i].style.opacity = 1;
  pokusaj.push(6);
  i += 1;
  if (i % 10 === 0) {
    i += 6;
    provera();
    pokusaj = [];
  }
});
function provera() {
  let tempBaza = [];
  for (let i = 0; i < 4; i++) {
    tempBaza[i] = zadatak[i];
  }
  let t = 0,
    n = 0;
  for (let j = 0; j < 4; j++) {
    if (pokusaj[j] === zadatak[j]) {
      t += 1;
      tempBaza[j] = 0;
    }
  }
  for (let k = 0; k < 4; k++) {
    if (tempBaza.includes(pokusaj[k])) {
      n += 1;
      pokusaj[k] = 0;
    }
  }
  console.log(t, n);
  console.log(pokusaj);
  console.log(tempBaza);
  return [t, n];
}
