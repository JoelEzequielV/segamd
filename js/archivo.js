   let productos = [];
    fetch('productos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      productos = data; //  sin JSON.stringify
        //cards productos
            let contenedorProductos = document.getElementById('productos');
            let contenedorIndividual = document.createElement('div');
            contenedorIndividual.classList.add('container-prod');

        productos.forEach(elememt => {
            contenedorIndividual.innerHTML += `
            <div class="card-producto">
            <form id="my_form${elememt.id}">
            <output id="nombre" name="nombre" class="font_2">${elememt.name}</output>
            <img src="${elememt.img}" alt="${elememt.name}" class="imgcardProd">
            <output id="precio" name="precio" class="precio-prod"><b>${elememt.price}</b></output><span> USD</span>
                <input type="number" id="amount" name="amount" min="1" max="10" value="1" class="cantidadP" /><br>
                <div id="myBotonera${elememt.id}">
                <input type="button" id="myBtn${elememt.id}" class="btnAñadir" value="Descripcion">
                <input type="button" onclick="comprar(${elememt.id})" class="btnAñadir" value="Comprar">
                </div>
            </form>
            </div>
            `;
            contenedorProductos.append(contenedorIndividual);
        })
        //Modales 
        let AllModals = document.getElementById('AllModals');
        productos.forEach(elememt => {
            AllModals.innerHTML += `
            <div class="modal" id="myModal${elememt.id}">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>${elememt.description}</p>
                </div>
            </div>`;
        }) 

    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
  
    //Comprar -->
    function comprar(id) {             
        //validar si ya se compro y ya esta en carrito
        let repetido = 0;
        for(let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            let enCarrito = JSON.parse(localStorage.getItem(clave));
            let idcompra = enCarrito.productoId;
            if(idcompra == id){
                repetido = 1;
            }
         
             }
             if(repetido == 1){
                errorModalE();
                console.log('repetido')
               // alert('Error, este producto ya esta en carrito.')
                return true;
             }else{ 
        //Extraigo los datos a guardar
        let idx = id.toString();
        let param = 'my_form' + idx;
        let form = document.getElementById(param);
        console.info('Tipo ' + typeof form);
        const nombre = form.elements['nombre'].value;
        const precio = form.elements['precio'].value; 
        const amount = form.elements['amount'].value;
        const idram = Math.floor(Math.random() * 999999999999);
        //const firstElement = form.elements[0]; 
        console.log("Cantidad de elementos: "+ form.length);
        console.log("Nombre " + nombre);
        console.log("precio2 " + precio);
    
        //Armo el objeto a guardar
        let pedido = {
        "id" : idram,
        "productoId" : idx,
        "name" : nombre,
        "price" : precio,
        "amount" : amount,
        //"priceX" : (amount * precio)
        }

        //LocalStorage validar
        if (typeof(Storage) !== "undefined") {
        localStorage.setItem(pedido.id, JSON.stringify(pedido));
        } 
         
        let idx2 = id.toString();
        let llink = 'my_form' + idx2;
        const parentId = llink;
        // Guardar el id en el hash de la URL
        location.hash = parentId;
        // Recargar la página
        function recargaPagi(){
        location.reload();
        }
        recargaPagi();

        let loc_idx = '#'+llink;
        // window.location.href = loc_idx;


        function simulateClick() {
            const link = document.getElementById(loc_idx);
            link.click();
          }
        simulateClick();




        return false;
        }
        
    }

    //crear sección para mostrar los productos

       for(let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let enCarrito = JSON.parse(localStorage.getItem(clave));
       
            let lista = document.getElementById("listaDeseados");
            let contenI = document.createElement('tbody');
           
            contenI.innerHTML += `
                <tr>
                    <td>${enCarrito.name}</td>
                    <td>${enCarrito.id}</td>
                    <td>${enCarrito.productoId}</td>
                    <td>
                        <select onchange="actualizarCantidad(${enCarrito.id}, this.value)" class="inRang">
                            ${[...Array(10)].map((_, i) => `
                                <option value="${i + 1}" ${enCarrito.amount == i + 1 ? "selected" : ""}>${i + 1}</option>
                            `).join('')}
                        </select>
                    </td>
                    <td>${Math.round((enCarrito.price * enCarrito.amount) * 100) / 100}</td>
                    <td><button onclick="eliminarPedido(${enCarrito.id})" class="btnBorrar"><img src="img/basura.png" class="iconoBasura"></button></td>
                </tr>`;   

            lista.append(contenI);  
            
           }
          

        // Función para recalcular el total y actualizar la cantidad
        function actualizarCantidad(id, nuevaCantidad) {
        
            //let carrito = [];
            for(let i = 0; i < localStorage.length; i++) {
                let clave = localStorage.key(i);
                let carrito = JSON.parse(localStorage.getItem(clave));
            
                let miObjeto = carrito;

                // Verifica id
                if (miObjeto.id == id) {
                // ambia el valor
                miObjeto.amount = nuevaCantidad;

                //Guarda el objeto actualizado nuevamente en localStorage
                localStorage.setItem(id, JSON.stringify(miObjeto));

                console.log("Objeto actualizado:", miObjeto);
                } else {
                console.error("El objeto no existe en localStorage.");
                }


        }
            // Actualizar el total del carrito
            location.reload();

        }
        //cantidad de prod y precio total final
        let cantidadProd = 0;
        let total = 0;

        for(let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            let enCarrito = JSON.parse(localStorage.getItem(clave));
            let monto = enCarrito.price;
            let canti = parseInt(enCarrito.amount);
            total += (monto * canti);
            cantidadProd += canti;
        
        } 
           let descuento = 0;

            if (cantidadProd >= 10) {
                descuento = 0.50; // 50% de descuento
            } else if (cantidadProd >= 3) {
                descuento = 0.25; // 25% de descuento
            }
            const montoAnterior = Math.round(total * 100) / 100;
            const montoDescuento = total * descuento; // Calcula el monto del descuento
            const totalConDescuento = total - montoDescuento; // Total a pagar con descuento
            let avisoDescuento;
         
            if( descuento == 0.50){
                avisoDescuento = '<span class="mblue">50%</span> de descuento del monto: <span class="mred">'+montoAnterior+'</span>';
             
            }else if (descuento == 0.25) {
                avisoDescuento = '<span class="mblue">25%</span> de descuento del monto: <span class="mred">'+montoAnterior+'</span>';
               
            } else {
                avisoDescuento = '<span class="mred">sin descuento</span>';
            }
            total = totalConDescuento;
            let finalTotal = Math.round(total * 100) / 100;
            let totalPagar = document.getElementById("totalPagar");
            totalPagar.innerHTML += '<span>Total a pagar: </span><span class="mblue">'+finalTotal+'</span> usd <br>'+avisoDescuento;

            let itemsNum = document.getElementById("itemsNum");
            itemsNum.innerHTML += cantidadProd;
            let estaVacio = document.getElementById("estaVacio");
            if(cantidadProd == 0 && estaVacio){
                estaVacio.innerHTML += 'El carrito está vacío, añada productos primero.';  
            }else{

            let tablaIn= document.getElementById('tablaIn');
            tablaIn.innerHTML += `
            <tr>
            <th class="th-table">Producto:</th>
            <th class="th-table">Id compra:</th>
            <th class="th-table">Id del producto:</th>
            <th class="th-table">Cantidad:</th>
            <th class="th-table">Precio</th> 
            <th class="th-table">Borrar</th> 
            </tr>`;

            let eliminarPedidos= document.getElementById('eliminarPedidos');
            eliminarPedidos.innerHTML += `<button onclick="eliminarPedidos()" class="btnVaciar">Limpiar carrito</button>`;

            let cardpagarTotal= document.getElementById('cardpagarTotal');
            cardpagarTotal.classList.remove('inac1');
            cardpagarTotal.classList.add('act1');
            

            }



        //funciones

            function eliminarPedido(id) {
                localStorage.removeItem(id);
                location.reload();
            }

            function eliminarPedidos() {
            localStorage.clear();
            location.reload();
            }
        

 
