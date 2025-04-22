function redireccion() {
    window.location = "/";
}  
 
var temp = setTimeout(redireccion,15*60*1000); // 15 minutos en milisegundos

document.addEventListener("click", function(){
    clearTimeout(temp);
    temp = setTimeout(redireccion,15*60*1000); // Reinicia el temporizador al hacer clic
})