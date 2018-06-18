const inputTexto = document.querySelector("input");
const btnClick = document.querySelector("button"); //query es consulta selector siempre lo //lo entreparentesis debe ir con comilas
const counter = document.querySelector("span");


// para desactivar boton si no tiene nada
btnClick.disabled= true;
inputTexto.addEventListener("input", () => {
  if (inputTexto.value.length > 0 ){
    btnClick.disabled = false;
  } else {
    btnClick.disabled = true;
  }
})


// que cada vez que escriba el numero de contador vaya bajando y es un evento del teclado

inputTexto.addEventListener("keyup" ,() => {
 inputTexto.value
 counter.innerHTML = 250 - inputTexto.value.length;
})