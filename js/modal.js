
document.addEventListener('DOMContentLoaded', function () {

  function esperarElemento() {
    return new Promise((resolve) => {
      const intervalo = setInterval(() => {
        const elemento = document.querySelector(`#myBtn6`);
        if (elemento) {
          clearInterval(intervalo); 
          resolve(elemento); 
        }
      }, 100); // Verifica cada 100 ms
    });
  }
  
  //esperamos a que existan todos los botones
  async function miFuncion() {
    const elemento = await esperarElemento(`#myBtn6`);
   // console.log("El elemento ya está disponible");


      // Obtener los botones de activación por su ID
            const btn1 = document.getElementById("myBtn1");
            const btn2 = document.getElementById("myBtn2");
            const btn3 = document.getElementById("myBtn3");

            const btn4 = document.getElementById("myBtn4");
            const btn5 = document.getElementById("myBtn5");
            const btn6 = document.getElementById("myBtn6");

            // Obtener las modales por su ID
            const modal1 = document.getElementById("myModal1");
            const modal2 = document.getElementById("myModal2");
            const modal3 = document.getElementById("myModal3");

            const modal4 = document.getElementById("myModal4");
            const modal5 = document.getElementById("myModal5");
            const modal6 = document.getElementById("myModal6");

            // Obtener los elementos de cierre (x) por su clase
            const spans = document.querySelectorAll('.close');

        // Abrir las modales correspondientes cuando se hace clic en los botones
        if (btn1) {
        btn1.addEventListener("click", function () {
          modal1.style.display = "block"; 
        });
      }
      if (btn2) {
        btn2.addEventListener("click", function () {
          modal2.style.display = "block"; 
        });
      }
      if (btn3) {
        btn3.addEventListener("click", function () {
          modal3.style.display = "block"; 
        });
      }
        if (btn4) {
        btn4.addEventListener("click", function () {
          modal4.style.display = "block"; 
        });
      }
      if (btn5) {
        btn5.addEventListener("click", function () {
          modal5.style.display = "block"; 
        });
      }
        if (btn6) {
        btn6.addEventListener("click", function () {
          modal6.style.display = "block"; 
        });
      }
        // Cerrar la modal (x)
        spans.forEach(function(span, index) {
          span.onclick = function() {
            let modal = [modal1, modal2, modal3, modal4, modal5, modal6][index];
            modal.style.display = "none"; // Cerrar la modal correspondiente
          };
        });

        // Cerrar la modal si se hace clic fuera de la ventana modal
        window.onclick = function(event) {
          if (event.target === modal1) {
            modal1.style.display = "none";
          } else if (event.target === modal2) {
            modal2.style.display = "none"; 
          } else if (event.target === modal3) {
            modal3.style.display = "none"; 
          } else if (event.target === modal4) {
            modal4.style.display = "none"; 
          } else if (event.target === modal5) {
            modal5.style.display = "none"; 
          } else if (event.target === modal6) {
            modal6.style.display = "none"; 
          }
        };

      }
      miFuncion();
})



