/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //opciones de quien
  const quien = [
    "Mi aspiradora robot",
    "Una falla en la matrix",
    "Un ataque de amnesia colectiva",
    "Una invasión alienígena",
    "Un error en la simulación"
  ];
  //opciones de que hizo
  const Hizo = [
    "hizo desaparecer",
    "eliminó en forma permanente",
    "desactivó temporalmente",
    "reprogramó",
    "alteró"
  ];
  //opciones de lo afectado
  const objetoAfectado = [
    "la red",
    "mi teléfono",
    "mi código",
    "mi computadora",
    "mi memoria"
  ];
  //función que combina las const para generar la excusa
  function generarExcusa() {
    //math.random devuelve random y math.floor redondea
    const randomquien = quien[Math.floor(Math.random() * quien.length)];
    const randomHizo = Hizo[Math.floor(Math.random() * Hizo.length)];
    const randomobjetoAfectado =
      objetoAfectado[Math.floor(Math.random() * objetoAfectado.length)];
    const excuse = `${randomquien} ${randomHizo} ${randomobjetoAfectado}.`;
    document.getElementById("excuse").innerHTML = excuse;
    const generarButton = document.getElementById("generar");
    generarButton.addEventListener("click", generarExcusa);
  }

  generarExcusa();
};
