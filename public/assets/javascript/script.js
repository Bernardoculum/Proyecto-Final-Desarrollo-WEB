// function toggleInfo() {
// var infoDiv = document.querySelector('.info');
// if (infoDiv.style.display === 'none') {
//     infoDiv.style.display = 'block';
// } else {
//     infoDiv.style.display = 'none';
// }
// }

function MostrarContenido(elementoid) {
    var infoDiv = document.getElementById(elementoid);
    if (infoDiv.style.visibility === 'hidden') {
        infoDiv.style.visibility = 'visible';
    } else {
        infoDiv.style.visibility = 'hidden';
    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     const barras = document.querySelectorAll(".progress-bar");
  
//     barras.forEach(function (barra) {
//       const porcentaje = barra.parentElement.querySelector(".porcentaje");
//       const ancho = barra.dataset.ancho;
//       let valorActual = 0;
//       const velocidadAnimacion = 30; // La velocidad de la animación en milisegundos
  
//       const llenarBarra = () => {
//         if (valorActual < parseFloat(ancho)) {
//           valorActual++;
//           barra.style.width = valorActual + "%";
//           porcentaje.textContent = valorActual + "%";
//           setTimeout(llenarBarra, velocidadAnimacion);
//         }
//       };
  
//       llenarBarra();
//     });
//   });


// script.js

document.addEventListener('DOMContentLoaded', function () {
    const porcentajeElements = document.querySelectorAll('.porcentaje');

    const animatePercentages = (elements) => {
        elements.forEach((element) => {
            const porcentaje = parseInt(element.innerText);
            let currentPercentage = 0;

            const increasePercentage = () => {
                if (currentPercentage <= porcentaje) {
                    element.textContent = currentPercentage + '%';
                    currentPercentage++;
                    setTimeout(increasePercentage, 80); // Puedes ajustar el intervalo
                }
            };

            increasePercentage();
        });
    };

    animatePercentages(porcentajeElements);
});

