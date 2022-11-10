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

 /*----------------------------------------Zona práctica 2-----------------------------------*/
 let coleccionfotos = ['./multimedia/DSCN0083.jpg ', './multimedia/DSCN0155.jpg', './multimedia/IMG_0106.jpg','./multimedia/IMG_0147.jpg','./multimedia/IMG_0207.jpg']
 let posicion = 0
 let intervalo
 let interruptor = false

 function muestraImg(id) {

     let img = document.getElementById('img_galeria')
     img.src = './multimedia/logo_frog.png '
     document.getElementById('divimg_galeria').style.display = "flex"
     document.getElementById('botones_mini').style.display = "flex"
     document.getElementById('boton_inicio').style.display = "none"
 }

 function cambiaImg(num) {
     let img = document.getElementById('img_galeria')

     posicion = posicion + num

     if (posicion < 0) {
         posicion = coleccionfotos.length - 1 //asi podriamos saber cuantos hay dentro del array, sacar la longitud y quitarle el de la cuenta del cero con el menos uno
     }
     if (posicion >= coleccionfotos.length) {
         posicion = 0
     }

     img.src = coleccionfotos[posicion]
 }

 function fotoDirecta(pos) {
     //falta poner filtros para que no tenga errores
     let img = document.getElementById('img_galeria')
     img.src = coleccionfotos[pos]
     posicion = pos //para seguir con la misma caja para el resto
 }

