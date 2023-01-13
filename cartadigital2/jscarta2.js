function ocultarTodos() {
    mostrados = document.querySelectorAll('.cont_txt_pltmenu_carta2, .mostrar_rte')
    if (mostrados) mostrados.forEach((m) => m.classList.remove('mostrar_rte'))
}
clickeables = document.querySelectorAll('.cont_txt_pltmenu_carta2')
clickeables.forEach((c) => c.addEventListener("click", abreFichaRte, false))

function abreFichaMenu(idloca) {
    let divgoster = document.getElementById(idloca);
    divgoster.classList.toggle('mostrar_rte');
    divgoster.classList.toggle('esconder_rte');

}
function ocultarTodos() {
    mostrados = document.querySelectorAll('.cont_txt_pltmenu_carta2, .mostrar_rte')
    if (mostrados) mostrados.forEach((m) => m.classList.remove('mostrar_rte'))
  }
  clickeables = document.querySelectorAll('.cont_txt_pltmenu_carta2')
  clickeables.forEach((c) => c.addEventListener("click", abreFichaRte, false))
  function abreFichaMenu(idloca) {
    let divgoster = document.getElementById(idloca);
    divgoster.classList.toggle('mostrar_rte');
    divgoster.classList.toggle('esconder_rte');
    
  }

function ampliaImg(nom) {
    let divmg = document.getElementById(nom);
    divmg.classList.toggle('img_ampliada');
}

function abreFichaRte(el) {
    let padre = el.parentNode
    let divhijo = padre.querySelector('.cont_txt_pltmenu_carta2');
    document.querySelectorAll('.cont_txt_pltmenu_carta2').forEach(function (x) {
        if (x != divhijo) {
            x.classList.remove('mostrar_rte')
            x.classList.add('esconder_rte')
        }
    })
    
    divhijo.classList.toggle('esconder_rte')
    divhijo.classList.toggle('mostrar_rte')
}
function abreMenu(idloca) {
    let divfantasma=document.getElementById(idloca)
    divfantasma.classList.toggle('mostrar_rte')
    divfantasma.classList.toggle('esconder_rte')
}