const Horas = document.getElementById('Horas');
const Minutos = document.getElementById('Minutos');
const Segundos = document.getElementById('Segundos');

const relogio = setInterval(function time(){
let datetoday = new Date();
let hr = datetoday.getHours();
let min = datetoday.getMinutes();
let sec = datetoday.getSeconds();
if (hr < 10) hr='0'+hr;
if (min < 10) min='0'+min;
if (sec < 10) min='0'+sec;


Horas.textContent =hr;
Minutos.textContent =min;
Segundos.textContent =sec;

})