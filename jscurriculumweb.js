
function muestraDiv(idloca) {
   let divgoster = document.getElementById(idloca)

   divgoster.classList.toggle('mostrar')
  divgoster.classList.toggle('esconder')
}


function muestraDivpeq(idloco) {
  let divfantasma = document.getElementById(idloco);
  divfantasma.classList.toggle('mostrar')
  divfantasma.classList.toggle('esconder') 

}
function enseñaRadial(coco) {
    let caja_radial = document.getElementById(coco)
    caja_radial.classList.toggle('mostrar_bis')
    caja_radial.classList.toggle('esconder')

}

