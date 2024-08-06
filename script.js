// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // Ocultar todas las secciones
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Mostrar la sección seleccionada
    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Agregar la clase visible al contenedor de la página después de que se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    let pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
        pageContainer.classList.add('visible');
    }
    
    // Mostrar la sección por defecto
    showSection('semana1'); // Cambia 'semana1' según sea necesario
    showSection('semana2'); // Cambia 'semana1' según sea necesario
    showSection('semana3'); // Cambia 'semana1' según sea necesario
    showSection('semana4'); // Cambia 'semana1' según sea necesario
});

// Obtener elementos
let opinionButton = document.getElementById('opinion-button');
let opinionBox = document.getElementById('opinion-box');
let closeOpinion = document.getElementById('close-opinion');
let submitOpinion = document.getElementById('submit-opinion');

// Mostrar el cuadro de opinión
opinionButton.addEventListener('click', () => {
    opinionBox.style.display = 'block';
});

// Cerrar el cuadro de opinión
closeOpinion.addEventListener('click', () => {
    opinionBox.style.display = 'none';
});

// Enviar la opinión (simulado aquí)
submitOpinion.addEventListener('click', () => {
    alert('¡Gracias por tu opinión!');
    opinionBox.style.display = 'none'; // Ocultar el cuadro después de enviar
});

