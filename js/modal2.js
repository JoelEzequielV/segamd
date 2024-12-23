let descriptiones = [];
    fetch('juegos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      descriptiones = data;

      //Modales
        let AllModals2 = document.getElementById('AllModals2');
        descriptiones.forEach(elememt => {
            AllModals2.innerHTML += `
            <div class="modal" id="Modal${elememt.id}">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>${elememt.description}</p>
                    <br>
                    <a href="shop.html">
                    <button class="btnAñadir">Comprar</button>
                    </a>
                </div>
            </div>`;
        }) 

    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });



document.addEventListener('DOMContentLoaded', function () {

    function esperarElemento() {
      return new Promise((resolve) => {
        const intervalo = setInterval(() => {
          const elemento = document.querySelector(`#id6`);
          if (elemento) {
            clearInterval(intervalo); 
            resolve(elemento); 
          }
        }, 100); // Verifica cada 100 ms
      });
    }
    
    //esperamos a que existan todos los botones
    async function miFuncion() {
      const elemento = await esperarElemento(`#id6`);
     // console.log("El elemento ya está disponible");
  
  
        // Obtener los botones de activación por su ID
              const btn1 = document.getElementById("id1");
              const btn2 = document.getElementById("id2");
              const btn3 = document.getElementById("id3");
  
              const btn4 = document.getElementById("id4");
              const btn5 = document.getElementById("id5");
              const btn6 = document.getElementById("id6");
  
              // Obtener las modales por su ID
              const modal1 = document.getElementById("Modal1");
              const modal2 = document.getElementById("Modal2");
              const modal3 = document.getElementById("Modal3");
  
              const modal4 = document.getElementById("Modal4");
              const modal5 = document.getElementById("Modal5");
              const modal6 = document.getElementById("Modal6");
  
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