
//FUNCION DESDE ACA SIEMPRE ES IGUAL
const btn = document.querySelector("button"); //si no tiene id el botton el query selector llama al primero que encuentra
const img = document.getElementById("photo");
const url = "https://dog.ceo/api/breeds/image/random";

const getJSON = (url, callback) => {
  //crear instancia del objeto XMLHttpRequest
  const request = new XMLHttpRequest();

  request.onload = () => {
    // 4: la peticion se termino y la respuesta esta lista
    //200: status esta ok
    if (request.readyState === 4 && request.status === 200) {
      //responseText es para que lo devuelva como string
      callback(request.responseText);
    }
  }
  // open ()
  request.open("GET", url);
  //send()
  request.send();
}
// HASTA ACA ES IGUAL 


//evento click de nuestra llamada
btn.addEventListener("click", () => {
  getJSON(url, response => {
    //url y response son parametros
    //respuesta resposeText la trasforme en string y con (JSON.parse= es un metodo completo), se transforme en objeto normal a objeto para trabajarlo en JS
  //.message porque es el unico dato que necesito ya que en la consola me mostro que ahi estaba la url 
    let doggie = JSON.parse(response).message;
    console.log(doggie);
    img.src = doggie
  })
});