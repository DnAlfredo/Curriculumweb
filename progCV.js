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
