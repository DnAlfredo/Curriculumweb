
let coleccionfotos = ['./multimediaAdec/imgsociosadec.jpg', './multimediaAdec/imgsociosadec2.jpg', './multimediaAdec/imgsociosadec3.jpg','./multimediaAdec/imgsociosadec1.jpg',
'./multimediaAdec/imgsociosadec4.jpg','./multimediaAdec/imgsociosadec5.jpg','./multimediaAdec/imgsociosadec6.jpg']
let posicion = 0
let intervalo
let interruptor = false
function muestraImg() {
    let img = document.getElementById('img_galeria')
    img.src = './multimediaAdec/imgsociosadec.jpg'
    document.getElementById('divimg_galeria').style.display = "flex"
    document.getElementById('botones_mini').style.display = "flex"
    document.getElementById('boton_inicio').style.display = "none"
}

function cambiaImg(num) {
    let img = document.getElementById('img_galeria')
    posicion = posicion + num
    if (posicion < 0) {
        posicion = coleccionfotos.length - 1 
    }
    if (posicion >= coleccionfotos.length) {
        posicion = 0
    }
    img.src = coleccionfotos[posicion]
}

function fotoDirecta(pos) {
    let img = document.getElementById('img_galeria')
    img.src = coleccionfotos[pos]
    posicion = pos 
}
function carruselFotos() {
    if (interruptor == false) {
        document.getElementById('flecha_der').style.zIndex = "-3"
        document.getElementById('icon_img1').style.zIndex = "-3"
        document.getElementById('flecha_iz').style.zIndex = "-3"
        document.getElementById('icon_img2').style.zIndex = "-3"
        document.getElementById('icon_img3').style.zIndex = "-3"
        document.getElementById('divimg_galeria').style.width = "40rem"
        intervalo = setInterval(() => {
            cambiaImg(1)
        }, 2000);
        interruptor = true
    } else {
        document.getElementById('flecha_der').style.zIndex = "0"
        document.getElementById('icon_img1').style.zIndex = "0"
        document.getElementById('flecha_iz').style.zIndex = "0"
        document.getElementById('icon_img2').style.zIndex = "0"
        document.getElementById('icon_img3').style.zIndex = "0"
        document.getElementById('divimg_galeria').style.width = "20rem"
        clearInterval(intervalo)
        interruptor = false
    }
}
/*----------------------ABRE/CIERRA FICHA--------------------------------------*/
/*prueba cogida del js de la shopping list*/
function muestraFicha(idloca) {
    let divgoster = document.getElementById(idloca)
    divgoster.classList.toggle('mostrar')
    divgoster.classList.toggle('esconder')
   
}
function muestraFichatipos(idloca) {
    let divgoster = document.getElementById(idloca);
    divgoster.classList.toggle('mostrarftipos')
    divgoster.classList.toggle('esconder')
    document.body.scrollTop = 1000;
    document.documentElement.scrollTop = 187;
}
function abreFichacntct(idloca) {
    let divgoster = document.getElementById(idloca);
    divgoster.classList.toggle('mostrar_cntct')
    divgoster.classList.toggle('esconder_cntct')
    document.getElementById('cont_cntct').classList.toggle('mostrar_cntct')
  }