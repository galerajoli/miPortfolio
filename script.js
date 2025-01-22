// Obtén el botón de "Contactar", el formulario y el botón de cerrar
const contactBtn = document.getElementById("contactBtn");  // Obtener el botón "Contactar"
const popup = document.getElementById("popup");  // Obtener el pop-up
const closeBtn = document.getElementById("closeBtn");  // Obtener el botón de cerrar
const contactForm = document.getElementById("contactForm");  // Obtener el formulario

// Mostrar el pop-up al hacer clic en el botón "Contactar"
contactBtn.addEventListener("click", function() {
    popup.style.display = "block";  // Muestra el pop-up
});

// Cerrar el pop-up cuando se haga clic en el botón de cerrar
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";  // Oculta el pop-up
});

// Manejar el envío del formulario
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir la recarga de la página

    // Aquí puedes agregar la lógica para procesar el formulario, como enviar los datos por AJAX

    // Mostrar un mensaje de éxito
    alert("Formulario enviado correctamente");

    // Cerrar el formulario después del envío
    popup.style.display = "none";  // Ocultar el pop-up
});

/*
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional

    // Recoger los datos del formulario
    const formData = new FormData(this); // 'this' hace referencia al formulario

    // Crear una solicitud AJAX
    fetch('url_del_servidor', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Suponiendo que el servidor responde con JSON
    .then(data => {
        alert("Formulario enviado correctamente!");
        // Aquí podrías mostrar un mensaje de éxito o limpiar el formulario
    })
    .catch(error => {
        alert("Hubo un error al enviar el formulario.");
        console.error(error);
    });
});*/