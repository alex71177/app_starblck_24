window.addEventListener("DOMContentLoaded",inicio)


function inicio() {
  const progreso=document.getElementById(`progreso`)
  const porcentaje=document.getElementById(`porcentaje`)
  let cantidad=0

  let tiempo= setInterval(() => {
    cantidad +=1
    progreso.style.width =`${cantidad}% `

  if (cantidad == 100) {

   window.open("../validacion-registro/index.html"); 
  //  window.close("../login/login.html")
   window.close("../index.html"); 
    clearInterval(tiempo)
  }
   porcentaje.textContent=`${cantidad}% `
  }, 300);

}

  

  