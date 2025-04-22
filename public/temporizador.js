function redireccion() {
    window.location = "index.html"; // Cambia la URL a la que deseas redirigir
}  
 
var temp = setTimeout(redireccion,15*60*1000); // 15 minutos en milisegundos

document.addEventListener("click", function(){
    clearTimeout(temp);
    temp = setTimeout(redireccion,15*60*1000); // Reinicia el temporizador al hacer clic
})