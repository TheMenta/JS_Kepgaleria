const LIST = [
    "../kepek/w14.jpeg",
    "../kepek/w13.jpg",
    "../kepek/maybach.jpg",
    "../kepek/hamrus.jpg",
    "../kepek/c63.jpg",
  ];
window.addEventListener("load")
const keplista = [ "kepek/w13.jpg"]
const ARTICLEELEM = document.querySelectorAll("article");
for (let index = 0; index < keplista.length; index++) {
    ARTICLEELEM[0].innenhtml += <div> img src="${keplista[index]}" alt="#" </div>
}
console.log(articleElem);
  ARTICLEELEM.click;
  const kiskepek = document.querySelectorAll("article div img");
  const balgomb = document.querySelector(".bal");
  const jobbgomb= document.querySelector(".jobb");
  for (let index = 0; index < kiskepek.length; index++) {
    kiskepek[index].addEventListener("click", function () {
        kepmegnyit(index, kepeklista);
    });
  }
var kepek = document.querySelector('.');

var kepeim = [ 'kepek/maybach.jpg', 'kepk/w13.jpg' ];

var i = 0;

function balra(){
    if(i<=0) i = kepeim.length;
    i--;
    return setImg();
}

function jobbra(){
    if(i >= kepeim.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return kepek.setAttribute('src',kepeim[i]);
}