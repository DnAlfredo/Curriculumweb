/*-----------------------RADIAL---------------------------*/
function enseñaRadial(coco) {
    let caja_radial = document.getElementById(coco);
    caja_radial.classList.toggle('mostrar');
    caja_radial.classList.toggle('esconder');
  
  }
 

  function abreFicha(idloca) {
    let divgoster= document.getElementById(idloca);
    divgoster.classList.toggle('mostrar');
    divgoster.classList.toggle('esconder')
  }