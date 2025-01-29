// ============ Toogle icon navbar ============

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ============ Scroll sections active link ============

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    // ============ Sticky navbar ============
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // ============ Remove toggle icon and navbar when click navbar link (scroll) ============

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// ============ Scroll reveal ============

ScrollReveal ({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200, 
});

ScrollReveal().reveal('.home-content, .heading, .skill-header h1', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .pasiones-container, .about-content p, .contactame form, .skill-container, .projects-container, .left-container, .right-container, .end', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .detail-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .skill-header h3, .detail-text', { origin: 'right' });

// ============ Animation skill-progress ============

// Wait for the DOM to be fully loaded

document.addEventListener("DOMContentLoaded", () => {
    // Obtener todas las barras de progreso
    const skillBars = document.querySelectorAll(".skill-progress");

    // Función para animar todas las barras de progreso
    const animateSkillBars = () => {
        skillBars.forEach((skillBar) => {
            // Obtener el porcentaje desde el atributo data-percent
            const percent = skillBar.getAttribute("data-percent");

            if (percent === "0") {
                // Si el porcentaje es 0, mostrar "Coming Soon" y agregar clase
                skillBar.textContent = "Coming Soon";
                skillBar.classList.add("coming-soon"); // Clase personalizada
                skillBar.style.width = "auto"; // Evitar que se muestre como barra
            } else {
                // Establecer la propiedad personalizada para la animación CSS
                skillBar.style.setProperty("--percent", `${percent}%`);
                // Añadir la clase de animación
                skillBar.classList.add("animate");
                // Ajustar el ancho de la barra después de 1 segundo
                setTimeout(() => {
                    skillBar.style.width = `${percent}%`;
                }, 1000);
            }
        });
    };

    // Llamar a la función para animar las barras
    animateSkillBars();
});