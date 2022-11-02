/*-----------------------RADIAL---------------------------*/

function enseñaRadial(coco) {
  let caja_radial = document.getElementById(coco);
  caja_radial.classList.toggle('mostrar');
  caja_radial.classList.toggle('esconder');

}


function abreFicha(idloca) {
  let divgoster = document.getElementById(idloca);
  divgoster.classList.toggle('mostrar');
  divgoster.classList.toggle('esconder');
 
}

function cierramenu() {
  abreFicha(idloca)
}
function abreFichacntct(idloca) {
  let divgoster = document.getElementById(idloca);
  divgoster.classList.toggle('mostrar_cntct')
  divgoster.classList.toggle('esconder_cntct')
  document.getElementById('cont_cntct').classList.toggle('mostrar_cntct')
}
/* arriba he tenido que crear una esconder y mostrar especial para cambiar el tamaño haciendo toogle. Hay que coger la id del texto a enseñar mientrras el
 ccont se queda con esconder del tamaño deseado y al mostrar le decimos que le haga el mostrar al cont también*/
 function cambiaInterfaz() {
  document.getElementById("cssdrag").href = "./nuevocss.css"

}

function cambiaColores() {
  document.getElementById("cssdrag").href = "./diseñoyColorCV.css"

}
function mantenerCss() {
 let estilo=document.getElementById("cssdrag");
 estilo.classList.toggle('.href = "./nuevocss.css"')
 estilo.classList.toggle('.href = "./diseñoyColorCV.css"')
}