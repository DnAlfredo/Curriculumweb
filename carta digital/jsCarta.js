function abreFichaRte(idloca) {
  ocultarTodos()
  let divgoster = document.getElementById(idloca); 
  divgoster.classList.toggle('mostrar_rte');
}

function ocultarTodos() {
  mostrados = document.querySelectorAll('.cont_img_plt, .mostrar_rte')
  if (mostrados) mostrados.forEach((m) => m.classList.remove('mostrar_rte'))
}
clickeables = document.querySelectorAll('.cont_img_plt')
clickeables.forEach((c) => c.addEventListener("click", abreFichaRte, false))
function abreFichaMenu(idloca) {
  let divgoster = document.getElementById(idloca);
  divgoster.classList.toggle('mostrar_rte');
  divgoster.classList.toggle('esconder_rte');
  
}
function ampliaImg(nom) {
  let divmg=document.getElementById(nom);
  divmg.classList.toggle('img_ampliada');
}
