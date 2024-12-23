
  document.addEventListener("DOMContentLoaded", () => {
    // Variables de los elementos del menú
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');

    // Función para abrir el menú
    menuIcon.addEventListener('click', () => {
      menu.classList.add('active'); // Agregar la clase para mostrar el menú
    });

    // Función para cerrar el menú
    closeMenu.addEventListener('click', () => {
      menu.classList.remove('active'); // Remover la clase para ocultar el menú
    });
 });
