document.addEventListener("DOMContentLoaded", function () {
    // Carousel functionality
    const carousels = document.querySelectorAll(".carousel-images");
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll("img");
        let index = 0;

        function moveCarousel() {
            index++;
            if (index >= images.length) {
                index = 0;
            }
            carousel.style.transform = `translateX(${-index * 100}%)`;
        }

        setInterval(moveCarousel, 10000); // Cambia de imagen cada 10 segundos

        // Manual carousel controls
        const prevButton = carousel.parentElement.querySelector(".prev");
        const nextButton = carousel.parentElement.querySelector(".next");

        prevButton.addEventListener("click", function() {
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
            carousel.style.transform = `translateX(${-index * 100}%)`;
        });

        nextButton.addEventListener("click", function() {
            index++;
            if (index >= images.length) {
                index = 0;
            }
            carousel.style.transform = `translateX(${-index * 100}%)`;
        });
    });

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    // Show/hide additional content
    var enlacesMostrar = document.querySelectorAll('.mostrar-contenido');
    
    enlacesMostrar.forEach(function(enlace) {
      enlace.addEventListener('click', function(event) {
        event.preventDefault();
        var contenidoExtra = this.previousElementSibling;
        if (contenidoExtra.style.display === 'none' || contenidoExtra.style.display === '') {
          contenidoExtra.style.display = 'block';
          this.textContent = 'Ocultar contenido';
        } else {
          contenidoExtra.style.display = 'none';
          this.textContent = 'Mostrar más';
        }
      });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var texto = document.querySelector('.maquina-escribir');
    texto.classList.add('escribiendo');
  });
  