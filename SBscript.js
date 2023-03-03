const carrusel=document.querySelector(".slogan-slider");
let maxScrollLeft=carrusel.scrollWidth-carrusel.clientWidth;
let intervalo=null;
let step=1;
const start=() =>{
    intervalo=setInterval(function(params){
        carrusel.scrollLeft=carrusel.scrollLeft+step;
        if(carrusel.scrollLeft==maxScrollLeft){
            step=step*-1;
        }else if(carrusel.scrollLeft===0){
            step=step*-1;
        }
    },10);
}
const stop=() =>{
    clearInterval(intervalo);
}
start();
